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

        if (matchesGuessProgressively(normalizedGuess, personagem)) {
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
        }
    });
}

updateDatalist();

// Função para completar o chute com base nas opções disponíveis (ordem alfabética)
// A variável "sortedPersonagens" é utilizada como cache para evitar reordenações repetidas
const sortedPersonagens = personagens.slice().sort((a, b) => normalizeGuess(a.nome).localeCompare(normalizeGuess(b.nome)));

function getBestCompletion(guess) {
    const rawGuess = guess.trim();
    if (rawGuess === "") return null;

    for (const personagem of sortedPersonagens) {
        if (matchesGuessProgressively(rawGuess, personagem)) {
            return personagem.nome;
        }
    }

    return null;
}

// Função para remover opções do datalist após serem chutadas
function removeOptionsFromGuess(guess) {
    const options = datalist.getElementsByTagName('option');
    for (let i = options.length - 1; i >= 0; i--) {
        const optionValue = options[i].value;
        const normalizedOptionValue = normalizeGuess(optionValue);
        if (normalizedOptionValue === normalizeGuess(guess)) {
            datalist.removeChild(options[i]);
        }
    }
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

// Adiciona evento ao input para validação em tempo real
input.addEventListener("input", () => {
    const guess = input.value;

    updateDatalist(guess);

    // Desabilita o botão se houver parênteses no chute
    if (containsParentheses(guess)){
        submitButton.disabled = true;
        return;
    }

    const possible = personagens.some(personagem =>
        matchesGuessProgressively(guess, personagem)
    );

    submitButton.disabled = !possible || guess.trim() === "";
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

    removeOptionsFromGuess(completedGuess);

    const comparison = compareGuess(completedGuess, gameState.characterOfTheDay);

    if (comparison.isCorrect) {
        alert(`Parabéns! Você acertou! O personagem era ${gameState.characterOfTheDay.nome}.`);

        console.log("Gerando novo personagem do dia...");
        resetGame();
    } else {
        alert(`Errado! Tente novamente.`);
    }
});