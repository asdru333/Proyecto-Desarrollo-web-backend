const db = require("../models/index");

exports.listProducts = async (req, res) => {
  // #swagger.tags = ['Products']
  const products = [{
    id:1,
    name: 'Pizza de jamón',
    sauce: 'Tomate',
    cheese: 'Mozzarella',
    ingredients: 'Jamón',
    price: 7000
  },
]
  res.json(products);
};