import { compareAttribute, compareArrayAttribute, compareArrayCountAttribute } from "./compareGuess.js";
import { RESULTADOS_CHUTE } from "../data/enums.js";

// Função para comparar dois personagens
export function compareCharacters(characterA, characterB) {
    if (!characterA || !characterB) {
        console.error("compareCharacters: Parâmetros inválidos.");
        return null;
    }

    const isEspecial =
        characterA.primeira_aparicao?.tipo === "especial" ||
        characterB.primeira_aparicao?.tipo === "especial";
    
    return {
        genero: compareAttribute(characterA.genero, characterB.genero),
        alinhamentos: compareArrayAttribute(characterA.alinhamentos, characterB.alinhamentos),
        identidades_akumatizadas: compareArrayCountAttribute(
            characterA.identidades_akumatizadas,
            characterB.identidades_akumatizadas
        ),
        miraculous_associados: compareArrayAttribute(
            characterA.miraculous_associados.map(m => m.nome ?? m),
            characterB.miraculous_associados.map(m => m.nome ?? m)
        ),
        primeira_aparicao: isEspecial
            ? compareAttribute(
                characterA.primeira_aparicao.temporada,
                characterB.primeira_aparicao.temporada
              )
            : compareAttribute(
                characterA.primeira_aparicao.ordem_global,
                characterB.primeira_aparicao.ordem_global
              )
    };    
}

export function isCharacterCollision(compareResult) {
    if (!compareResult) {
        return false;
    }

    const allCorrect = Object.values(compareResult).every(result => result === RESULTADOS_CHUTE.CORRETO);
    return allCorrect;
}

export function detectCharacterCollisions(personagens) {
    const colisoes = [];

    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            const p1 = personagens[i];
            const p2 = personagens[j];

            const comparison = compareCharacters(p1, p2);

            if (isCharacterCollision(comparison)) {
                colisoes.push({
                    personagens: [p1.nome, p2.nome],
                    detalhes: comparison
                });
            }
        }
    }

    return colisoes;
}