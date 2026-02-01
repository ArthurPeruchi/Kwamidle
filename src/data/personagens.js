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
        },
        imagem: "public/images/icons/marinette_icon.png"
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
        },
        imagem: "public/images/icons/adrien_icon.png"
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
        },
        imagem: "public/images/icons/gabriel_icon.png"
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
        },
        imagem: "public/images/icons/alya_icon.png"
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
        },
        imagem: "public/images/icons/nino_icon.png"
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
        },
        imagem: "public/images/icons/chloe_icon.png"
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
        },
        imagem: "public/images/icons/nathalie_icon.png"
    },
    {
        id: 8,
        nome: "Sabrina Raincomprix",
        aliases: ["Miss Hound"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Desaparecida", "Desaparecida (Escarlate)", "Miraculer"],
        miraculous_associados: [MIRACULOUS.CACHORRO, MIRACULOUS.JOANINHA, MIRACULOUS.GATO, MIRACULOUS.TARTARUGA, MIRACULOUS.RAPOSA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/sabrina_icon.png"
    },
    {
        id: 9,
        nome: "Cerise Bianca",
        aliases: ["Lila Rossi", "Chrysalis"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.MAL],
        identidades_akumatizadas: ["Volpina", "Volpina (Escarlate)", "Camaleoa", "Hoaxer", "Timestalker", "Spectral Looter"],
        miraculous_associados: [MIRACULOUS.BORBOLETA, MIRACULOUS.RAPOSA, MIRACULOUS.JOANINHA, MIRACULOUS.GATO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 26,
            ordem_global: 26
        },
        imagem: "public/images/icons/lila_icon.png"
    },
    {
        id: 10,
        nome: "Max Kanté",
        aliases: ["Pegasus"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Jogador", "Jogador (Escarlate)", "Jogador 2.0"],
        miraculous_associados: [MIRACULOUS.CAVALO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/max_icon.png"
    },
    {
        id: 11,
        nome: "Kyoko Tsurugi",
        aliases: ["Kagami Tsurugi", "Ryuko"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Revanche", "Revanche (Escarlate)", "Oni-Chan", "Mentira", "Ryukomori", "Revanche Prime"],
        miraculous_associados: [MIRACULOUS.DRAGAO, MIRACULOUS.TARTARUGA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 7,
            ordem_global: 33
        },
        imagem: "public/images/icons/kyoko_icon.png"
    },
    {
        id: 12,
        nome: "Juleika Couffaine",
        aliases: ["Purple Tigress"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Reflekta", "Reflekta (Escarlate)"],
        miraculous_associados: [MIRACULOUS.TIGRE],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/juleika_icon.png"
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
        },
        imagem: "public/images/icons/luka_icon.png"
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
        },
        imagem: "public/images/icons/denis_icon.png"
    },
    {
        id: 15,
        nome: "Rose Lavillant",
        aliases: ["Pigella"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Princesa Perfume", "Princesa Perfume (Escarlate)"],
        miraculous_associados: [MIRACULOUS.PORCO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/rose_icon.png"
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
        },
        imagem: "public/images/icons/felix_icon.png"
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
        },
        imagem: "public/images/icons/caline_icon.png"
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
        },
        imagem: "public/images/icons/tom_icon.png"
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
            episodio: 3,
            ordem_global: 3
        },
        imagem: "public/images/icons/sabine_icon.png"
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
        },
        imagem: "public/images/icons/manon_icon.png"
    },
    {
        id: 21,
        nome: "Ivan Bruel",
        aliases: ["Minotaurox"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Coração de Pedra", "Coração de Pedra (Escarlate)", "Miraculizado"],
        miraculous_associados: [MIRACULOUS.TOURO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/ivan_icon.png"
    },
    {
        id: 22,
        nome: "Mylene Haprèle",
        aliases: ["Polymouse"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Horrificador", "Horrificador (Escarlate)"],
        miraculous_associados: [MIRACULOUS.RATO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/mylene_icon.png"
    },
    {
        id: 23,
        nome: "Nora Césaire",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Anansi", "Miraculizado"],
        miraculous_associados: [MIRACULOUS.TIGRE],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 21,
            ordem_global: 47
        },
        imagem: "public/images/icons/nora_icon.png"
    },
    {
        id: 24,
        nome: "Alix Kubdel",
        aliases: ["Bunnyx"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Temporizadora", "Temporizadora (Escarlate)"],
        miraculous_associados: [MIRACULOUS.COELHO, MIRACULOUS.CACHORRO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/alix_icon.png"
    },
    {
        id: 25,
        nome: "Nathaniel Kurtzberg",
        aliases: ["Caprikid"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Ilustrador do Mal"],
        miraculous_associados: [MIRACULOUS.CABRA],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/nathaniel_icon.png"
    },
    {
        id: 26,
        nome: "Marc Anciel",
        aliases: ["Rooster Bold"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Reverso"],
        miraculous_associados: [MIRACULOUS.GALO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 9,
            ordem_global: 35
        },
        imagem: "public/images/icons/marc_icon.png"
    },
    {
        id: 27,
        nome: "Lê Chiến Kim",
        aliases: ["King Monkey"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Cupido Negro", "Cupido Negro (Escarlate)", "Humor Cruel"],
        miraculous_associados: [MIRACULOUS.MACACO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 2,
            ordem_global: 2
        },
        imagem: "public/images/icons/kim_icon.png"
    },
    {
        id: 28,
        nome: "Wang Fu",
        aliases: ["Mestre Fu", "Jade Turtle"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Furioso Fu"],
        miraculous_associados: [MIRACULOUS.TARTARUGA, MIRACULOUS.PAVAO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 4,
            ordem_global: 4
        },
        imagem: "public/images/icons/fu_icon.png"
    },
    {
        id: 29,
        nome: "Jagged Stone",
        aliases: [],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Guitarrista Malvado", "Guitarrista Malvado (Escarlate)"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 7,
            ordem_global: 7
        },
        imagem: "public/images/icons/jagged_icon.png"
    },
    {
        id: 30,
        nome: "Nadja Chamack",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Rainha Repórter", "Rainha Repórter (Escarlate)"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 3,
            ordem_global: 3
        },
        imagem: "public/images/icons/nadja_icon.png"
    },
    {
        id: 31,
        nome: "Placide I.T.",
        aliases: ["Gorila"],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Gorizilla", "Gorizilla (Escarlate)"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 1,
            ordem_global: 1
        },
        imagem: "public/images/icons/gorila_icon.png"
    },
    {
        id: 32,
        nome: "Zoé Lee",
        aliases: ["Vesperia"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Esmagadora"],
        miraculous_associados: [MIRACULOUS.ABELHA, MIRACULOUS.GATO],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 4,
            episodio: 7,
            ordem_global: 85
        },
        imagem: "public/images/icons/zoe_icon.png"
    },
    {
        id: 33,
        nome: "André Bourgeois",
        aliases: [],
        genero: GENEROS.MASCULINO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Ditador", "Caça-Amores", "Ditador (Escarlate)"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 1,
            episodio: 3,
            ordem_global: 3
        },
        imagem: "public/images/icons/andre_icon.png"
    },
    {
        id: 34,
        nome: "Audrey Bourgeois",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.NEUTRO, ALINHAMENTOS.MAL],
        identidades_akumatizadas: ["Rainha da Moda", "Caça-Amores", "Rainha da Moda (Escarlate)"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 4,
            ordem_global: 30
        },
        imagem: "public/images/icons/audrey_icon.png"
    },
    {
        id: 35,
        nome: "Ondine",
        aliases: [],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: ["Sereia", "Sereia (Escarlate)", "Sereia Adormecida"],
        miraculous_associados: [],
        primeira_aparicao: {
            tipo: "episodio",
            temporada: 2,
            episodio: 9,
            ordem_global: 35
        },
        imagem: "public/images/icons/ondine_icon.png"
    },
    {
        id: 36,
        nome: "Jessica Keynes",
        aliases: ["Águia"],
        genero: GENEROS.FEMININO,
        alinhamentos: [ALINHAMENTOS.BOM],
        identidades_akumatizadas: [],
        miraculous_associados: [MIRACULOUS.AGUIA],
        primeira_aparicao: {
            tipo: "especial",
            nome: "Miraculous World: Nova Iorque - Heróis Unidos",
            codigo_producao: 327
        },
        imagem: "public/images/icons/jessica_icon.png"
    }
];

/*
Obs.: Os personagens akumatizados por Scarlet Moth nos episódios de "Dia dos Heróis" (pt. 1 e 2) são os seguintes:
- Alya Césaire como Rena Fúria - ✅
- Nino Lahiffe como Casca Grossa - ✅
- Chlóe Bourgeois como Rainha Vespa - ✅
- Cerise Bianca como Volpina (Escarlate) - ✅
- Nadja Chamack como Rainha Repórter (Escarlate) - ✅
- Sabrina Raincomprix como Desaparecida (Escarlate) - ✅
- Jagged Stone como Guitarrista Malvado (Escarlate) - ✅
- Clara Nigthingale como Cantora (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Mylene Haprèle como Horrificador (Escarlate) - ✅
- Ivan Bruel como Coração de Pedra (Escarlate) - ✅
- Max Kanté como Jogador (Escarlate) - ✅
- Rose Lavillant como Princesa Perfume (Escarlate) - ✅
- Placide I.T. (Gorila) como Gorizilla (Escarlate) - ✅
- Le Chiến Kim como Cupido Negro (Escarlate) - ✅
- Alix Kubdel como Temporizadora (Escarlate) - ✅
- Fred Haprèle como O Mímico (Escarlate) - PERSONAGEM NÃO CADASTRADO
- André como Glaciator (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Augusto como Gigantitã (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Otis Césaire como Animan (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Jalil Kubdel como O Faraó (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Roger Raincomprix como Rogercop (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Kyoko Tsurugi como Revanche (Escarlate) - ✅
- Armand como Urso Maligno (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Audrey Bourgeois como Rainha da Moda (Escarlate) - ✅
- André Bourgeois como Ditador (Escarlate) - ✅
- Ondine como Sereia (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Phillipe Candeloro como Frozer (Escarlate) - PERSONAGEM NÃO CADASTRADO
- Armand D'Argencourt como Lâmina Negra (Escarlate) - PERSONAGEM NÃO CADASTRADO
*/