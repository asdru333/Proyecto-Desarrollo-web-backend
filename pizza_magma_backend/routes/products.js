const express = require("express");
const router = express.Router();
const {
  listProducts,
} = require("../controllers/products");

router
  .route("/")
  .get(listProducts);

  module.exports = router;