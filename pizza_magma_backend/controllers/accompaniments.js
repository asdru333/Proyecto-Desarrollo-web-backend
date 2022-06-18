const db = require("../models/index");

exports.listAccompaniments = async (req, res) => {
  // #swagger.tags = ['Accompaniments']
  const accompaniments = [{
    id: 1,
    name: 'Pan de ajo',
    units: 5,
    price: 1200
  },
  {
    id: 2,
    name: 'Bread sticks con salsa de tomate',
    units: 10,
    price: 2000
  },
  {
    id: 3,
    name: 'Calzone',
    units: 1,
    price: 1500
  },
  {
    id: 4,
    name: 'Pan con tomate y queso',
    units: 9,
    price: 2500
  }
]
  res.json(accompaniments);
};