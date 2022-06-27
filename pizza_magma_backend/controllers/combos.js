
exports.listCombos = async (req, res) => {
    // #swagger.tags = ['Combos']
    const combos = [
        {
            id : 1,
            description : '2 pizzas medianas más un refresco de 2 litros',
            price : 9500
        },
        {
            id : 2,
            description: '1 pizza grande\n1 refresco 1 litro\n1 acompañamiento\n1 postre',
            price: 9500
        },
        {
            id : 3,
            description: '1 postre gratis por la compra de 3 pizzas',
            price: 0
        },
        {
            id : 4,
            description: '2x1 en pizzas\nSólo los míercoles',
            price: 0
        }
    ]
res.json(combos);
};