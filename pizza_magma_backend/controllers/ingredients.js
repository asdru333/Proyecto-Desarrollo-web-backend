
exports.listIngredients = async (req, res) => {
    // #swagger.tags = ['Ingredients']
    const ingredients = {
      "sizes" : [
        {
            label: "Pequeña",
            price: 1000,
            value: "small"
        },
        {
            label: "Mediana",
            price: 2000,
            value: "medium"
        },
        {
            label: "Grande",
            price: 3000,
            value: "large"

        },
        {
            label: "Monstruo",
            price: 4000,
            value: "monster"
        }
      ],
      "crusts" : [
        {
            label: "Delgada",
            price: 0,
            value: "thin"
        },
        {
            label: "Gruesa",
            price: 500,
            value: "thick"
        },
        {
            label: "Cheesy",
            price: 800,
            value: "cheesy"
        }
      ],
      "sauces" : [
        {
            label: "Tomate",
            price: 200,
            value: "tomato"
        },
        {
            label: "Alfredo",
            price: 400,
            value: "alfredo"
        },
        {
            label: "BBQ",
            price: 400,
            value: "bbq"
        }
      ],
      "cheeses" : [
        {
            label: "Tres Quesos",
            price: 300,
            value: "three"
        },
        {
            label: "Parmesano y Romano",
            price: 400,
            value: "parm"
        },
        {
            label: "Queso Azul",
            price: 400,
            value: "blue"
        }
      ],
      "meats" : [
        {
            label: "Jamón",
            price: 100,
            value: "ham"
        },
        {
            label: "Tocineta",
            price: 200,
            value: "bacon"
        },
        {
            label: "Carne molida",
            price: 200,
            value: "beef"
        },
        {
            label: "Pepperoni",
            price: 300,
            value: "pepperoni"
        },
        {
            label: "Pollo",
            price: 200,
            value: "chicken"
        },
        {
            label: "Salchicha",
            price: 250,
            value: "sausage"
        }
      ],
      "vegetables" : [
        {
            label: "Cebolla",
            price: 50,
            value: "onion"
        },
        {
            label: "Chile",
            price: 50,
            value: "peppers"
        },
        {
            label: "Aceitunas",
            price: 100,
            value: "olives"
        },
        {
            label: "Hongos",
            price: 100,
            value: "mushrooms"
        },
        {
            label: "Rodajas de tomate",
            price: 50,
            value: "tomatoes"
        },
        {
            label: "Piña",
            price: 10000,
            value: "pineapple"
        }
      ],
      "extras" : [
        {
            label: "Queso extra",
            price: 300,
            value: "cheese"
        },
        {
            label: "Salsa extra",
            price: 200,
            value: "sauce"
        }  
      ]
    }
  
    res.json(ingredients);
  };