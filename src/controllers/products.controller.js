import Product from "../models/Product";
import Category from "../models/Category";

export const createProduct = async (req, res) => {
  const { title,description, category, price } = req.body;

  try {
    const newProduct = new Product({
      title,
      description,
      category,
      price
    });

    const productSaved = await newProduct.save();

    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  res.status(200).json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find().populate("category");
  return res.json(products);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProduct);
};

export const filterProducts = async (req, res) => {
  
      let query = {};
      const category = await Category.findOne({ name: req.params.search });  
      const categoryId = category !== null ? category._id : '';

      if (req.params.search) {
        query = {
          $or: [
            {
              title: {
                $regex:
                  ".*" + req.params.search.replace(new RegExp(" ", "g"), ".*"),
                $options: "i",
              },
            },
            {
              category: categoryId ,
            },
          ],
        };
      }

      //find object
      let response = await Product.aggregate([
        { $match: query },
        { $sort: { title: 1 } },
      ]);

      res.status(200).json(response);
};



export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);

  res.status(204).json();
};