const db = require("../models/index");

exports.listPizzas = async (req, res) => {
  // #swagger.tags = ['Products']
  const products = [{
    id:1,
    name:'Pizza de jamón',
    sauce:'Tomate',
    cheese:'Mozzarella',
    ingredients:'Jamón',
    price:7000
  },
  {
    id:2,
    name:'Pizza de pepperoni',
    sauce:'Tomate',
    cheese:'Gouda',
    ingredients:'Pepperoni',
    price:8000
  },
  {
    id:3,
    name:'Pizza texana',
    sauce:'BBQ',
    cheese:'Gouda',
    ingredients:'Jamón y cebolla',
    price:9000
  },
  {
    id:4,
    name:'Pizza suprema',
    sauce:'Tomate',
    cheese:'Mozzarella',
    ingredients:'Pepperoni, jamón, chile dulce, hongos, carne molida y cebolla',
    price:11000
  },
  {
    id:5,
    name:'Pizza caótica',
    sauce:'Tomate',
    cheese:'Parmesano',
    ingredients:'Salami, maíz, aceituna, hongos y cebolla',
    price:10000
  },
  {
    id:6,
    name:'Pizza con piña',
    sauce:'Tomate',
    cheese:'Parmesano',
    ingredients:'Piña y jamón',
    price:8000
  },
]
  res.json(pizzas);
};