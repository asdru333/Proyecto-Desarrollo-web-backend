
exports.listDeserts = async (req, res) => {
  // #swagger.tags = ['Deserts']
  const deserts = [{
    id: 1,
    name: 'Helado de vainilla',
    description: '3 bolas de helado que se puede pedir con sirope de chocolate o caramelo',
    price: 2100,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
  },
  {
    id: 2,
    name: 'Tres leches',
    description: 'Pedazo de Tres leches, disfruta el sabor costarricense',
    price: 2900,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
  },
  {
    id: 3,
    name: 'flan',
    description: 'Disfrutá del flan más exquisito',
    price: 3300,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/02/comida-basura-2242805.jpg'
  }
]
  res.json(deserts);
};