const db = require("../models/index");

exports.listAccompaniments = async (req, res) => {
  // #swagger.tags = ['Accompaniments']
  const accompaniments = [{
    id: 1,
    name: 'Pan de ajo',
    units: 2,
    price: 1000
  },
  {
    id: 2,
    name: 'Bread sticks con salsa de tomate',
    units: 6,
    price: 1000
  },
  {
    id: 3,
    name: 'Calzone',
    units: 1,
    price: 1500
  }
]
  res.json(accompaniments);
};