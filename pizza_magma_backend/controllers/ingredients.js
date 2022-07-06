
exports.listIngredients = async (req, res) => {
    // #swagger.tags = ['Ingredients']
    const ingredients = {
      "sizes" : [
        {
            name: "Pequeña",
            price: 100
        },
        {
            name: "Mediana",
            price: 100
        },
        {
            name: "Grande",
            price: 100
        },
        {
            name: "Monstruo",
            price: 100
        }
      ],
      "crusts" : [
        {
            name: "Delgada",
            price: 100
        },
        {
            name: "Gruesa",
            price: 100
        },
        {
            name: "Cheesy",
            price: 100
        }
      ],
      "sauces" : [
        {
            name: "Tomate",
            price: 100
        },
        {
            name: "Alfredo",
            price: 100
        },
        {
            name: "BBQ",
            price: 100
        }
      ],
      "cheeses" : [
        {
            name: "Tres Quesos",
            price: 100
        },
        {
            name: "Parmesano y Romano",
            price: 100
        },
        {
            name: "Queso Azul",
            price: 100
        }
      ],
      "meats" : [
        {
            name: "Jamón",
            price: 100
        },
        {
            name: "Tocineta",
            price: 100
        },
        {
            name: "Carne molida",
            price: 100
        },
        {
            name: "Pepperoni",
            price: 100
        },
        {
            name: "Pollo",
            price: 100
        },
        {
            name: "Salchicha",
            price: 100
        }
      ],
      "vegetables" : [
        {
            name: "Cebolla",
            price: 100
        },
        {
            name: "Chile",
            price: 100
        },
        {
            name: "Aceitunas",
            price: 300
        },
        {
            name: "Hongos",
            price: 200
        },
        {
            name: "Rodajas de tomate",
            price: 100
        },
        {
            name: "Piña",
            price: 10000
        }
      ],
      "extras" : [
        {
            name: "Queso extra",
            price: 400
        },
        {
            name: "Salsa extra",
            price: 300
        }  
      ]
    }
  
    res.json(ingredients);
  };