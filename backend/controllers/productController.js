const Product = require("../models/product");

//create new product => /api/v1/product/new

exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};
//Get all products => /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

//get single product => /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not dound",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
  console.log("Hello from controller");
};

//update a product  => /api/v1/product/:id
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// exports.updateProduct = async (req, res, next) => {
//   let product = await Product.findById();

//   if (!product) {
//     return res.status(404).json({
//       success: false,
//       message: "Product not found from update",
//     });
//   }
//   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });
//   return res.status(200).json({
//     success: true,
//     product,
//   });
// };
