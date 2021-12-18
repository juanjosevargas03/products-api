import Category from "../models/Category";

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newcategory = new Category({
      name
    });

    const categorySaved = await newcategory.save();

    res.status(201).json(categorySaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);
  res.status(200).json(category);
};

export const getCategories = async (req, res) => {
  const categorys = await Category.find();
  return res.json(categorys);
};

export const updateCategoryById = async (req, res) => {
  const updatedcategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedcategory);
};

export const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  await Category.findByIdAndDelete(id);

  res.status(204).json();
};