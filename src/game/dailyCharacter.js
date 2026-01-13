import { personagens } from "../data/personagens.js";

// Função para obter um personagem aleatório
export function getRandomCharacter(){
    const randomIndex = Math.floor(Math.random() * personagens.length); // Math.random * length gera um número entre 0 e o tamanho do array; Math.floor arredonda para baixo
    return personagens[randomIndex];
}