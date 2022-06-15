const db = require("../models/index");

exports.listDrinks = async (req, res) => {
  // #swagger.tags = ['Drinks']
  const drinks = [{
    id: 1,
    name: 'Coca cola',
    category: 'Gaseosa',
    mililiters: 600,
    price: 800
  },
  {
    id: 2,
    name: 'Jugo de naranja',
    category: 'Jugo de naranja',
    mililiters: 1000,
    price: 1100
  },
  {
    id: 3,
    name: 'Té frío de limón',
    category: 'Té frío',
    mililiters: 1000,
    price: 1300
  }
]
  res.json(drinks);
};