import { normalizeGuess } from "./normalization.js";

// Função para separar o chute em diferentes tokens (palavras)
export function tokenizeGuess(guess){
    return normalizeGuess(guess)
        .split(/\s+/) // separa por espaços
        .filter(Boolean); // remove strings vazias
}

// Função para verificar se o chute corresponde progressivamente ao personagem
export function matchesGuessProgressively(guess, personagem){
    const guessTokens = tokenizeGuess(guess);
    const possibleNames = [personagem.nome, ...(personagem.aliases || [])];

    // Se o usuário não digitou nada, não há restrição
    if(guessTokens.length === 0){
        return true;
    }
    
    // Se o usuário digitou algo, faz a verificação progressiva
    return possibleNames.some(name => {
        const nameTokens = tokenizeGuess(name);

        // Caso base: o chute não pode ter mais tokens que o nome/alias
        if (guessTokens.length > nameTokens.length) {
            return false; // chute maior que o nome/alias
        }

        // Caso 1: se existir apenas um token no chute, pode ser prefixo de qualquer token do personagem
        if(guessTokens.length === 1){
            return nameTokens.some(token =>
                token.startsWith(guessTokens[0]));
        }

        // Caso 2: se existir mais de um token no chute, o primeiro token deve bater EXATAMENTE com o primeiro token do nome/alias
        if(guessTokens[0] !== nameTokens[0]){
            return false;
        }

        // Os demais tokens podem ser prefixos, na ordem correta
        for (let i = 1; i < guessTokens.length; i++){
            if (!nameTokens[i].startsWith(guessTokens[i])){
                return false;
            }
        }

        return true;
    });
}