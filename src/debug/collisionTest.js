import { personagens } from "../data/personagens";
import { detectCharacterCollisions } from "../game/detectCollision";

// Detecta colisões
const colisoes = detectCharacterCollisions(personagens);

// Exibe resultado de forma amigável no console
console.table(
    colisoes.map(c => ({
        Personagem_1: c.personagens[0],
        Personagem_2: c.personagens[1]
    }))
);