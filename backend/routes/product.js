const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/products").get(isAuthenticatedUser, getProducts);

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/admin/product/:id").put(updateProduct).delete(deleteProduct);
router.route("/product/new").post(newProduct);

module.exports = router;
