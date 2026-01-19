import { normalizeGuess } from "../utils/normalization.js";
import { RESULTADOS_CHUTE } from "../data/enums.js";

// Função para comparar valores atributos simples (não arrays)
function compareAttribute(guessValue, answerValue) {
    if (guessValue === answerValue) {
        return RESULTADOS_CHUTE.CORRETO;
    } else {
        if (typeof guessValue === "number" && typeof answerValue === "number") {
            const posicao = guessValue < answerValue ? "MENOR" : "MAIOR";
            return { ...RESULTADOS_CHUTE.INCORRETO, posicao };
        }
        return RESULTADOS_CHUTE.INCORRETO;
    }
}

// Função para comparar valores de atributos compostos (arrays)
function compareArrayAttribute(guessArray = [], answerArray = []) {
    const normalizedGuessArray = guessArray.map(item => normalizeGuess(item));
    const normalizedAnswerArray = answerArray.map(item => normalizeGuess(item));
    const intersection = normalizedGuessArray.filter(item => normalizedAnswerArray.includes(item));

    if (intersection.length === 0) {
        if (normalizedAnswerArray.length === 0 && normalizedGuessArray.length === 0) {
            return RESULTADOS_CHUTE.CORRETO;
        } else {
            return RESULTADOS_CHUTE.INCORRETO;
        }
    }
    else if (intersection.length === normalizedAnswerArray.length && normalizedGuessArray.length === normalizedAnswerArray.length) {
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
        const guessCount = guessArray.length;
        const answerCount = answerArray.length;
        const difference = guessCount - answerCount;

        const posicao = difference < 0 ? "MENOR" : "MAIOR";

        return { ...RESULTADOS_CHUTE.INCORRETO, posicao };
    }
}

// Função para comparar o chute do usuário com o personagem do dia
export function compareGuess(guess, characterOfTheDay) {
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
        miraculous_associados: compareArrayAttribute(guess.miraculous_associados.map(ma => ma.nome), characterOfTheDay.miraculous_associados.map(ma => ma.nome)),
        primeira_aparicao: compareAttribute(guess.primeira_aparicao.ordem_global, characterOfTheDay.primeira_aparicao.ordem_global),
    };

    return {
        isCorrect: nameCorrect,
        results,
        character: characterOfTheDay,
    }
}