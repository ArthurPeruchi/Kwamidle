import { normalizeGuess } from "../utils/normalization.js";

// Função para comparar o chute do usuário com o personagem do dia
export function compareGuess(guess, characterOfTheDay) {
    if (!guess || !characterOfTheDay){
        console.error("compareGuess: Parâmetros inválidos.");
        return {
            isCorrect: false,
            character: characterOfTheDay
        };
    }

    const normalizedGuess = normalizeGuess(guess);
    const normalizedCharacterName = normalizeGuess(characterOfTheDay.nome);
    const normalizedAliases = characterOfTheDay.aliases.map(alias => normalizeGuess(alias));
    
    const isCorrect = normalizedGuess === normalizedCharacterName || normalizedAliases.includes(normalizedGuess);

    return {
        isCorrect: isCorrect,
        character: characterOfTheDay
    }
}