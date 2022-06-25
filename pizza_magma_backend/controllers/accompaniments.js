const db = require("../models/index");

exports.listAccompaniments = async (req, res) => {
  // #swagger.tags = ['Accompaniments']
  const accompaniments = [
    {
      id: 1,
      name: 'Pan de ajo',
      description: 'unidades: 5',
      price: 1200,
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
    },
    {
      id: 2,
      name: 'Bread sticks con salsa de tomate',
      description: 'unidades: 10',
      price: 2000,
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
    },
    {
      id: 3,
      name: 'Calzone',
      description: 'unidades: 1',
      price: 1500,
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
    },
    {
      id: 4,
      name: 'Pan con tomate y queso',
      description: 'unidades: 9',
      price: 2500,
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
    }
  ]
  res.json(accompaniments);
};