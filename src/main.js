import { personagens } from './data/personagens.js';
import { createGameState, addGuess, resetGameState } from './game/gameState.js';
import { normalizeGuess } from './utils/normalization.js';
import { matchesGuessProgressively } from './utils/matching.js';
import { containsParentheses } from './utils/validation.js'
import { compareGuess } from './game/compareGuess.js';

let gameState = createGameState(6);
console.log("Personagem do dia:", gameState.characterOfTheDay);

const input = document.getElementById('character-guess-input');
const submitButton = document.getElementById('submit-guess-button');

// Substituir datalist por dropdown customizado para melhor controle
const datalist = document.getElementById('characters-list');
const table = document.getElementById("guesses-table");

// Função para atualizar o datalist com base no chute atual
function updateDatalist(guess = "") {
    // Ordenar personagens por nome para melhor usabilidade
    const sortedPersonagens = personagens.slice().sort((a, b) => a.nome.localeCompare(b.nome));

    datalist.innerHTML = ''; // Limpa o datalist antes de popular

    const normalizedGuess = normalizeGuess(guess);
    
    sortedPersonagens.forEach(personagem => {
        const alreadyGuessed = gameState.guesses.some(g => normalizeGuess(g) === normalizeGuess(personagem.nome));
        if (alreadyGuessed) {
            return; // Pula personagens já chutados
        }

        if (!matchesGuessProgressively(normalizedGuess, personagem)) {
            return; // Pula personagens que não correspondem ao chute
        }

        // Opção do datalist
        const option = document.createElement('option');

        // Formatar valor como apenas "Nome"
        option.value = personagem.nome;
            
        // Se houver aliases, adiciona ao label
        if (personagem.aliases?.length) {
            option.label = `(${personagem.aliases.join(", ")})`;
        }

        // Adicionar ao datalist
        datalist.appendChild(option);
    });
}

updateDatalist("");

// Função para detectar se houve seleção do personagem pelo datalist (autocomplete)
function isExactDatalistOption(value) {
    return personagens.some(personagem =>
        normalizeGuess(personagem.nome) === normalizeGuess(value)
    );
}

// Função para completar o chute com base nas opções disponíveis (ordem alfabética)
// A variável "sortedPersonagens" é utilizada como cache para evitar reordenações repetidas
const sortedPersonagens = personagens.slice().sort((a, b) => normalizeGuess(a.nome).localeCompare(normalizeGuess(b.nome)));

function getBestCompletion(guess) {
    const rawGuess = guess.trim();
    if (rawGuess === "") return null;

    for (const personagem of sortedPersonagens) {
        if (matchesGuessProgressively(rawGuess, personagem)) {
            const alreadyGuessed = gameState.guesses.some(g => normalizeGuess(g) === normalizeGuess(personagem.nome));
            if (alreadyGuessed) {
                continue; // Pula se já foi chutado
            }
            return personagem.nome;
        }
    }

    return null;
}

// Função para limpar o input após um chute
function clearInput() {
    updateDatalist("");
    input.value = "";
    submitButton.disabled = true;
}

// Função para criar uma célula da tabela
function createCell(text) {
    const td = document.createElement("td");
    td.textContent = text;
    return td;
}

// Função para incluir um chute na tabela de chutes
function addGuessToTable(personagem) {
    const tableBody = document.getElementById("guesses-table-body");
    const row = document.createElement("tr");

    const comparison = compareGuess(personagem, gameState.characterOfTheDay);
    
    const colors = {
    "Correto": "#4CAF50",
    "Incorreto": "#F44336",
    "Parcial": "#ffe23b"
    };

    const arrows = {
        "MAIOR": " ▼",
        "MENOR": " ▲"
    };

    // Nome
    const nomeCell = createCell("");
    nomeCell.style.backgroundColor = colors[comparison.results.nome];

    // Imagem do personagem
    const img = document.createElement("img");
    img.src = personagem.imagem;
    img.alt = personagem.nome;
    img.title = personagem.nome;
    img.classList.add("character-icon-img");

    nomeCell.appendChild(img);
    row.appendChild(nomeCell);

    // Gênero
    const generoCell = createCell(personagem.genero);
    generoCell.style.backgroundColor = colors[comparison.results.genero];
    row.appendChild(generoCell);

    // Alinhamentos
    const alinhamentosCell = createCell(personagem.alinhamentos?.join(", ") || "-");
    alinhamentosCell.style.backgroundColor = colors[comparison.results.alinhamentos];
    row.appendChild(alinhamentosCell);

    // Identidades Akumatizadas
    const identidadesCell = createCell(personagem.identidades_akumatizadas.length.toString());
    if (typeof comparison.results.identidades_akumatizadas === 'object' && comparison.results.identidades_akumatizadas.posicao) {
        identidadesCell.textContent += arrows[comparison.results.identidades_akumatizadas.posicao];
    }
    identidadesCell.style.backgroundColor = colors[
        typeof comparison.results.identidades_akumatizadas === 'object' ?
        "Incorreto" :
        comparison.results.identidades_akumatizadas
    ];
    // Tooltip com as identidades akumatizadas
    identidadesCell.title = personagem.identidades_akumatizadas.length > 0 ?
        personagem.identidades_akumatizadas.join(", ") :
        "Nenhuma identidade akumatizada";
    row.appendChild(identidadesCell);

    // Miraculous Associados
    const miraculousCell = createCell("");
    miraculousCell.style.backgroundColor =
    colors[comparison.results.miraculous_associados];

    if (personagem.miraculous_associados.length === 0) {
        miraculousCell.textContent = "Nenhum";
    }
    personagem.miraculous_associados.forEach(ma => {
    const img = document.createElement("img");
    img.src = ma.imagem;
    img.alt = ma.nome;
    img.title = ma.nome;

    img.classList.add("miraculous-img");
    
    miraculousCell.classList.add("miraculous-cell");
    miraculousCell.appendChild(img);
    });
    row.appendChild(miraculousCell);

    // Primeira Aparição
    const aparicaoCell = createCell(`T${personagem.primeira_aparicao.temporada} E${personagem.primeira_aparicao.episodio}`);
    if (typeof comparison.results.primeira_aparicao === 'object' && comparison.results.primeira_aparicao.posicao) {
        aparicaoCell.textContent += arrows[comparison.results.primeira_aparicao.posicao];
    }
    aparicaoCell.style.backgroundColor = colors[
        typeof comparison.results.primeira_aparicao === 'object' ?
        "Incorreto" :
        comparison.results.primeira_aparicao
    ];
    row.appendChild(aparicaoCell);

    // Adiciona a linha à tabela (acima)
    tableBody.prepend(row);
}

// Função para submeter um chute
function submitGuess(guess) {
    // Se o jogo já terminou, avisa e reinicia
    if(gameState.isFinished) {
        alert("O jogo já terminou. Reiniciando...");
        resetGame();
        return;
    }

    // Verifica se há parênteses no chute
    if (containsParentheses(guess)) {
        alert("Não é permitido usar parênteses no chute.");
        return;
    }

    // Se não conseguiu completar, o chute é inválido
    const completedGuess = getBestCompletion(guess);
    if (!completedGuess) {
        alert("Chute inválido. Tente novamente.");
        return;
    }

    const personagem = personagens.find(p =>
        normalizeGuess(p.nome) === normalizeGuess(guess)
    );

    if (!personagem) return;

    // Autocompleta visualmente o chute no input
    input.value = completedGuess;

    // Adiciona o chute ao estado do jogo
    const result = addGuess(gameState, completedGuess);
    if (result?.error) {
        alert(result.error);
        return;
    }

    addGuessToTable(personagem);
    updateGuessesTableVisibility();
    clearInput();

    console.log("Chute do usuário:", completedGuess);
}

// Função para converter o chute do usuário (string) em um objeto estruturado
function convertGuessToObject(guess) {
    const personagem = personagens.find(p =>
        normalizeGuess(p.nome) === normalizeGuess(guess)
    );
    if (!personagem) {
        return null;
    }
    return {
        nome: personagem.nome,
        genero: personagem.genero,
        alinhamentos: personagem.alinhamentos,
        identidades_akumatizadas: personagem.identidades_akumatizadas,
        miraculous_associados: personagem.miraculous_associados,
        primeira_aparicao: personagem.primeira_aparicao
    };
}

// Função para readicionar as opções ao datalist ao reiniciar o jogo
function resetDatalist() {
    updateDatalist("");
}

// Função para verificar se o jogo já começou
function hasGameStarted() {
    if (gameState.guesses.length > 0) {
        return true;
    }
}

// Função para atualizar a visibilidade da tabela de chutes após o primeiro chute
function updateGuessesTableVisibility() {
    if (hasGameStarted()) {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}

// Função para reiniciar o jogo
function resetGame() {
    if (gameState.isFinished || gameState.guesses.length >= gameState.maxGuesses) {
        clearInput();
        gameState = resetGameState(gameState.maxGuesses);
        console.log("Personagem do dia:", gameState.characterOfTheDay);
        resetDatalist();
        updateGuessesTableVisibility();
    }
}

/*
// Verifica se o jogo já terminou ao carregar a página
if (gameState.isFinished || gameState.guesses.length >= gameState.maxGuesses) {
    resetGame();
}
*/

// Adiciona evento ao input para validação em tempo real
input.addEventListener("input", () => {
    const guess = input.value;

    updateDatalist(guess);

    // Desabilita o botão se houver parênteses no chute
    if (containsParentheses(guess)){
        submitButton.disabled = true;
        return;
    }

    // Sugere o melhor chute possível
    const completedGuess = getBestCompletion(guess);

    // Verifica se o chute pode corresponder a algum personagem não chutado
    const possible = personagens.some(personagem => {
        if (!matchesGuessProgressively(guess, personagem)) {
            return false;
        };

        // Verifica se o personagem já foi chutado
        const alreadyGuessed = gameState.guesses.some(g => normalizeGuess(g) === normalizeGuess(personagem.nome));

        return !alreadyGuessed;
    });

    // Habilita o botão apenas se houver possibilidade de correspondência e o chute não for vazio ou duplicado
    submitButton.disabled = !possible || guess.trim() === "" || completedGuess === null;

    if (isExactDatalistOption(guess) && submitButton.disabled === false) {
        submitButton.click();
    }
});

// Adiciona evento ao botão de submissão do chute
submitButton.addEventListener('click', () => {
    const guess = input.value;

    const completedGuess = getBestCompletion(guess);
    if (!completedGuess) {
        alert("Chute inválido. Tente novamente.");
        return;
    }

    submitGuess(completedGuess);

    const guessValue = convertGuessToObject(completedGuess);

    const comparison = compareGuess(guessValue, gameState.characterOfTheDay);
    if (comparison.isCorrect) {
        alert(`Parabéns! Você acertou! O personagem era ${gameState.characterOfTheDay.nome}.`);

        console.log("Gerando novo personagem do dia...");
        resetGame();
    } else {
        alert(`Errado! Tente novamente.`);
    }
});