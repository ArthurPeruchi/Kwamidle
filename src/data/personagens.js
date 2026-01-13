import { GENEROS, ALINHAMENTOS, MIRACULOUS } from './enums.js';

export const personagens = [
    {
        id: 1,
        nome: "Marinette Dupain-Cheng",
        aliases: ["Ladybug"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: [],
        miraculous_associados: [MIRACULOUS.JOANINHA, MIRACULOUS.GATO, MIRACULOUS.BORBOLETA, MIRACULOUS.RAPOSA, MIRACULOUS.ABELHA, MIRACULOUS.RATO, MIRACULOUS.COELHO, MIRACULOUS.DRAGAO, MIRACULOUS.COBRA, MIRACULOUS.CAVALO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        }      
    },
    {
        id: 2,
        nome: "Adrien Agreste",
        aliases: ["Cat Noir"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Cat Blanc", "Efêmero"],
        miraculous_associados: [MIRACULOUS.GATO, MIRACULOUS.JOANINHA, MIRACULOUS.COELHO, MIRACULOUS.COBRA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        }
    },
    {
        id: 3,
        nome: "Gabriel Agreste",
        aliases: ["Hawk Moth", "Shadow Moth", "Monarch"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.MAL],
        identidades_akumatizadas: ["Colecionador", "Terror Noturno"],
        miraculous_associados: [MIRACULOUS.BORBOLETA, MIRACULOUS.JOANINHA, MIRACULOUS.GATO, MIRACULOUS.TARTARUGA, MIRACULOUS.RAPOSA, MIRACULOUS.ABELHA, MIRACULOUS.PAVAO, MIRACULOUS.RATO, MIRACULOUS.TOURO, MIRACULOUS.TIGRE, MIRACULOUS.COELHO, MIRACULOUS.DRAGAO, MIRACULOUS.COBRA, MIRACULOUS.CAVALO, MIRACULOUS.CABRA, MIRACULOUS.MACACO, MIRACULOUS.GALO, MIRACULOUS.CACHORRO, MIRACULOUS.PORCO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        }
    },
    {
        id: 4,
        nome: "Alya Césaire",
        aliases: ["Rena Rouge"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Lady Wifi", "Rena Fúria", "Oblívio"],
        miraculous_associados: [MIRACULOUS.RAPOSA, MIRACULOUS.JOANINHA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        }
    },
    {
        id: 5,
        nome: "Nino Lahiffe",
        aliases: ["Carapace"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Homem-Bolha", "Casca Grossa", "Oblívio", "Lastimador"],
        miraculous_associados: [MIRACULOUS.TARTARUGA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        }
    },
    {
        id: 6,
        nome: "Chloé Bourgeois",
        aliases: ["Queen Bee"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.MAL],
        identidades_akumatizadas: ["Antibug", "Rainha Vespa", "Rainha dos Miraculous", "Rainha Banana", "Penalty", "Pisoteadora", "Rainha Prefeita"],
        miraculous_associados: [MIRACULOUS.ABELHA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        }
    },
    {
        id: 7,
        nome: "Nathalie Sancoeur",
        aliases: ["Mayura"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.MAL, ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Catalyst", "Safari"],
        miraculous_associados: [MIRACULOUS.PAVAO, MIRACULOUS.RAPOSA, MIRACULOUS.ABELHA, MIRACULOUS.CABRA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 6,
            ordem_global: 6
        }
    },
    {
        id: 8,
        nome: "Sabrina Raincomprix",
        aliases: ["Miss Hound"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Desaparecida", "Miraculer"],
        miraculous_associados: [MIRACULOUS.CACHORRO, MIRACULOUS.JOANINHA, MIRACULOUS.GATO, MIRACULOUS.TARTARUGA, MIRACULOUS.RAPOSA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        }
    },
    {
        id: 9,
        nome: "Cerise Bianca",
        aliases: ["Lila Rossi", "Chrysalis"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.MAL],
        identidades_akumatizadas: ["Volpina", "Camaleoa", "Hoaxer", "Timestalker", "Spectral Looter"],
        miraculous_associados: [MIRACULOUS.BORBOLETA, MIRACULOUS.RAPOSA, MIRACULOUS.JOANINHA, MIRACULOUS.GATO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 26,
            ordem_global: 26
        }
    },
    {
        id: 10,
        nome: "Max Kanté",
        aliases: ["Pegasus"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Jogador", "Jogador 2.0"],
        miraculous_associados: [MIRACULOUS.CAVALO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        }
    },
    {
        id: 11,
        nome: "Kyoko Tsurugi",
        aliases: ["Kagami Tsurugi", "Ryuko"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Revanche", "Oni-Chan", "Mentira", "Ryukomori", "Revanche Prime"],
        miraculous_associados: [MIRACULOUS.DRAGAO, MIRACULOUS.TARTARUGA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 7,
            ordem_global: 33
        }
    },
    {
        id: 12,
        nome: "Juleika Couffaine",
        aliases: ["Purple Tigress"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Reflekta"],
        miraculous_associados: [MIRACULOUS.TIGRE],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        }
    },
    {
        id: 13,
        nome: "Luka Couffaine",
        aliases: ["Viperion"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Silenciador", "Verdade"],
        miraculous_associados: [MIRACULOUS.COBRA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 9,
            ordem_global: 35
        }
    },
    {
        id: 14,
        nome: "Denis Damoclès",
        aliases: ["Sr. Damoclès"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Coruja Negra", "Coruja Sombria", "Miraculizado"],
        miraculous_associados: [MIRACULOUS.PORCO, MIRACULOUS.ABELHA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 3,
            ordem_global: 3
        }
    },
    {
        id: 15,
        nome: "Rose Lavillant",
        aliases: ["Pigella"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Princesa Perfume"],
        miraculous_associados: [MIRACULOUS.PORCO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        }
    },
    {
        id: 16,
        nome: "Félix Fathom",
        aliases: ["Argos"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.MAL, ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: [],
        miraculous_associados: [MIRACULOUS.PAVAO, MIRACULOUS.CACHORRO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 3,
            episodio: 23,
            ordem_global: 75
        }
    },
    {
        id: 17,
        nome: "Caline Bustier",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Zombizou", "Revolucionária"],
        miraculous_associados: [MIRACULOUS.PORCO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 3,
            ordem_global: 3
        }
    },
    {
        id: 18,
        nome: "Tom Dupain",
        aliases: [],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Lobipai"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 3,
            ordem_global: 3
        }
    },
    {
        id: 19,
        nome: "Sabine Cheng",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Qilin"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        }
    },
    {
        id: 20,
        nome: "Manon Chamack",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Marionetista"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        }
    }
];

/*
Obs.: Os personagens akumatizados em "Miraculizados" possuem todos os 15 poderes de miraculous possuídos 
por Monarch (plano da Operação Aliance Perfeita na 5ª temporada). A maioria deles não usou todos os poderes
em tela, então para facilitar a categorização, só foram listados os poderes que eles usaram efetivamente.
Os personagens relevantes que foram Miraculizados são: Ivan Bruel, Denis Damoclès e Nora Césaire. Os poderes
de miraculous utilizados por eles foram os seguintes:

- Ivan Bruel: nenhum poder usado (foi salvo antes de usar qualquer poder);
- Denis Damoclès: abelha;
- Nora Césaire: tigre.

*/