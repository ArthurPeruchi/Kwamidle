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

// Readiciona as opções ao datalist ao reiniciar o jogo
function resetDatalist() {
    updateDatalist("");
}

// Função para reiniciar o jogo
function resetGame() {
    clearInput();
    gameState = createGameState(6);
    console.log("Personagem do dia:", gameState.characterOfTheDay);
    resetDatalist();
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
    // Se o jogo já terminou, avisa e reinicia
    if (gameState.isFinished) {
        alert("O jogo já terminou. Reiniciando...");
        resetGame();
        return;
    }

    const userInput = input.value;
    
    if (containsParentheses(userInput)) {
        alert("Não é permitido usar parênteses no chute.");
        clearInput();
        return;
    }
    
    const completedGuess = getBestCompletion(userInput);

    // Se não conseguiu completar, o chute é inválido
    if (!completedGuess) {
        alert("Chute inválido. Tente novamente.");
        clearInput();
        return;
    }

    // Autocompleta visualmente o chute no input
    input.value = completedGuess;

    // Adiciona o chute ao estado do jogo
    const result = addGuess(gameState, completedGuess);
    if (result?.error) {
        alert(result.error);
        clearInput();
        return;
    }

    console.log("Chute do usuário:", completedGuess);
    clearInput();

    const comparison = compareGuess(completedGuess, gameState.characterOfTheDay);
    if (comparison.isCorrect) {
        alert(`Parabéns! Você acertou! O personagem era ${gameState.characterOfTheDay.nome}.`);

        console.log("Gerando novo personagem do dia...");
        resetGame();
    } else {
        alert(`Errado! Tente novamente.`);
    }
});