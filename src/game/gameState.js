import { getRandomCharacter } from './dailyCharacter.js';

// Função para criar o estado inicial do jogo
export function createGameState(maxGuesses = 6) {
    return {
        characterOfTheDay: getRandomCharacter(),
        guesses: [],
        maxGuesses,
        isFinished: false,
        won: false
    };
}

// Função para adicionar um chute ao estado do jogo
export function addGuess(gameState, guess) {
    if (gameState.isFinished) return;
    
    if (gameState.guesses.includes(guess)){
        return { error: "Chute já realizado." }; // Evita chutes duplicados
    }

    gameState.guesses.push(guess);

    checkGameFinished(gameState);
}

// Função para checar se o jogo terminou
export function checkGameFinished(gameState) {
    if (gameState.isFinished) {
        return;
    }
    if (gameState.guesses.length >= gameState.maxGuesses) {
        gameState.isFinished = true;
        gameState.won = false;
    }

    if (gameState.guesses.includes(gameState.characterOfTheDay.nome)) {
        gameState.isFinished = true;
        gameState.won = true;
    }
}

// Função para reiniciar o estado do jogo
export function resetGameState(gameState) {
    gameState.characterOfTheDay = getRandomCharacter();
    gameState.guesses = [];
    gameState.isFinished = false;
    gameState.won = false;
}