import { normalizeGuess } from "../utils/normalization.js";
import { RESULTADOS_CHUTE } from "../data/enums.js";

// Função para comparar valores atributos simples (não arrays)
function compareAttribute(guessValue, answerValue) {
    if (guessValue === answerValue) {
        return RESULTADOS_CHUTE.CORRETO;
    } else {
        return RESULTADOS_CHUTE.INCORRETO;
    }
}

// Função para comparar valores de atributos compostos (arrays)
function compareArrayAttribute(guessArray = [], answerArray = []) {
    const normalizedGuessArray = guessArray.map(item => normalizeGuess(item));
    const normalizedAnswerArray = answerArray.map(item => normalizeGuess(item));
    const intersection = normalizedGuessArray.filter(item => normalizedAnswerArray.includes(item));

    if (intersection.length === 0) {
        return RESULTADOS_CHUTE.INCORRETO;
    } else if (intersection.length === answerArray.length && normalizedGuessArray.length === normalizedAnswerArray.length) {
        return RESULTADOS_CHUTE.CORRETO;
    } else {
        return RESULTADOS_CHUTE.PARCIAL;
    }
}

// Função para comparar quantidades de atributos compostos (arrays)
function compareArrayCountAttribute(guessArray = [], answerArray = []) {
    if (guessArray.length === answerArray.length) {
        return RESULTADOS_CHUTE.CORRETO;
    } else {
        return RESULTADOS_CHUTE.INCORRETO;
    }
}

// Função para comparar o chute do usuário com o personagem do dia
export function compareGuess(guess, characterOfTheDay) {
    // Problema: se fazer o chute com um alias, dá parâmetro inválido
    if (!guess || !characterOfTheDay){
        console.error("compareGuess: Parâmetros inválidos.");
        return {
            isCorrect: false,
            results: null,
            character: characterOfTheDay
        };
    }

    const normalizedGuess = normalizeGuess(guess.nome);
    const normalizedCharacterName = normalizeGuess(characterOfTheDay.nome);
    const normalizedAliases = characterOfTheDay.aliases.map(alias => normalizeGuess(alias));

    const nameCorrect = normalizedGuess === normalizedCharacterName || normalizedAliases.includes(normalizedGuess);

    const results = {
        nome: nameCorrect ? RESULTADOS_CHUTE.CORRETO : RESULTADOS_CHUTE.INCORRETO,
        genero: compareAttribute(guess.genero, characterOfTheDay.genero),
        alinhamentos: compareArrayAttribute(guess.alinhamentos, characterOfTheDay.alinhamentos),
        identidades_akumatizadas: compareArrayCountAttribute(guess.identidades_akumatizadas, characterOfTheDay.identidades_akumatizadas),
        miraculous_associados: compareArrayAttribute(guess.miraculous_associados, characterOfTheDay.miraculous_associados),
        primeira_aparicao: compareAttribute(guess.primeira_aparicao, characterOfTheDay.primeira_aparicao),
    };

    console.log("Resultado da comparação do chute:", results);

    return {
        isCorrect: nameCorrect,
        results,
        character: characterOfTheDay,
    }
}