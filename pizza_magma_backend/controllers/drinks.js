
exports.listDrinks = async (req, res) => {
  // #swagger.tags = ['Drinks']
  const drinks = [{
    id: 1,
    name: 'Coca cola',
    description: 'Categoria: Gaseosa\nMililitros: 600',
    price: 800
  },
  {
    id: 2,
    name: 'Jugo de naranja',
    description: 'Categoria: Jugo natural\nMililitros: 1000',
    price: 1100
  },
  {
    id: 3,
    name: 'Té frío de limón',
    description: 'Categoria: Te frío\nMililitros: 1000',
    price: 1300
  }
]
  res.json(drinks);
};