const db = require("../models/index");

exports.listDeserts = async (req, res) => {
  // #swagger.tags = ['Deserts']
  const deserts = [{
    id: 1,
    name: 'Helado de vainilla',
    price: 2100
  },
  {
    id: 2,
    name: 'Brownie',
    price: 2900
  },
  {
    id: 3,
    name: 'flan',
    price: 3300
  }
]
  res.json(deserts);
};