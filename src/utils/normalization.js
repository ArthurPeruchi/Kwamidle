// Função para normalizar o chute do usuário (remover aliases, acentos, espaços extras e converter para minúsculas)
export function normalizeGuess(guess) {
    return guess
        .normalize("NFD") // separa letras de acentos
        .replace(/[\u0300-\u036f]/g, "") // remove os acentos
        .replace(/\(.*?\)/g, "") // remove aliases
        .trim() // remove espaços extras
        .toLowerCase(); // converte para minúsculas
}