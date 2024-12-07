
export const lista_produtos = [
    {
        id: "TE",
        title: "Tarifa Convencional",
        description: "Nada muda. É a tarifa que você paga atualmente, ou seja você está satisfeito com a atual tarifa.",
        price: "271,73",
        bullets: [
            "Compra direto da distribuidora com preços regulados.",
            "Fonte de energia mista de acordo com os atuais contratos da distribuidora.",
            "Sem alteração de preço."
        ],
        selected: true
    },

    {
        id: "ML1",
        title: "Tarifa de Mercado",
        description: "Você paga pelo transporte da energia e pelos impostos relacionados à distribuidora de energia, que é responsável por levar a eletricidade até a sua casa.",
        price: "240,71",
        bullets: [
            "Fonte de energia convencional.",
            "Preço mais baixo que a tarifa convencional.",
            "Custo de energia gerada 30% mais barata.",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML2",
        title: "Tarifa Energia Verde",
        description: "Este produto é ideal para quem quer impactar positivamente o meio ambiente e impulsionar sua sustentabilidade!",
        price: "292,58",
        bullets: [
            "Fonte de energia 100% limpa.",
            "Custo de energia gerada 30% maior.",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML3",
        title: "Tarifa Slim",
        description: "Este produto é ideal para quem quer economia máxima e ainda investe na sustentabilidade.",
        price: "228,91",
        bullets: [
            "Fonte de energia 100% renovável.",
            "Custo de energia gerada 50% mais barato.",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML4",
        title: "Tarifa com Cashback",
        description: "Este produto oferece o benefício de cashback, ou seja, você recebe de volta uma parte do valor pago. Isso pode tornar a opção mais vantajosa.",
        price: "219,66",
        bullets: [
            "Fonte de Energia Convencional.",
            "Avalie o potencial.",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML5",
        title: "Tarifa Horária",
        description: "Esse produto é ideal se você tem disposição para alterar seus hábitos de consumo em busca de um menor custo.",
        price: "279,09",
        bullets: [
            "Fonte de energia convencional.",
            "Custos de energia diferenciado por patamar (horas do dia).",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML6",
        title: "Tarifa Energia Verde Horária",
        description: "Esse produto é ideal se você quer mudar seus hábitos de consumo para economizar e também apoiar a sustentabilidade, usando energia 100% renovável.",
        price: "280,29",
        bullets: [
            "Fonte de energia 100% renovável",
            "Custos de energia diferenciado por patamar (horas do dia).",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML7",
        title: "Tarifa Slim Horária",
        description: "Esse produto é ideal se você tem disposição para alterar seus hábitos de consumo em busca de um menor custo, além de apoiar a sustentabilidade.",
        price: "259,89",
        bullets: [
            "Fonte de energia 100% renovável",
            "Custos de energia diferenciado por patamar (horas do dia).",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML8",
        title: "Tarifa de Contrato Fixo",
        description: "Este produto ajuda a manter sua conta de energia estável. Você paga um valor fixo mensalmente por uma quantidade de energia. Se usar mais, paga apenas o excedente.",
        price: "270,79",
        bullets: [
            "Fonte de energia convencional.",
            "Custo de energia gerada 30% mais barata.",
            "Sem fidelidade."
        ],
    },
    {
        id: "ML9",
        title: "Tarifa COMERCIALIZA",
        description: "Esse produto é ótimo se você quer reduzir sua conta de energia sem precisar gastar mais. Você pode comprar energia de uma empresa diferente, o que pode resultar em preços mais baixos.",
        price: "373,44",
        bullets: [
            "Fonte de energia convencional.",
            "Custo de energia gerada 30% mais barata.",
            "Sem fidelidade."
        ],
    },
]


export const grupos_produtos_map: Map<string, string[]> = new Map([
    ["E1", ["TE", "ML1"]],
    ["E2", ["TE", "ML1", "ML2"]],
    ["E3", ["TE", "ML1", "ML3"]],
    ["E4", ["TE", "ML2", "ML3"]],
    ["E5", ["TE", "ML1", "ML4"]],
    ["E6", ["TE", "ML1"]],
    ["E7", ["TE", "ML1"]],
    ["E8", ["TE", "ML5"]],
    ["E9", ["TE", "ML5", "ML6"]],
    ["E10", ["TE", "ML5", "ML7"]],
    ["E11", ["TE", "ML8"]],
    ["E12", ["TE", "ML9"]],
    ["E13", ["TE", "ML1"]],
])

export const whatsapp_text = encodeURIComponent("Olá, gostaria de mais informações sobre o Projeto de Adesaão ao Mercado Livre de Energia");
export const whatsapp_number = "5551984084420";

