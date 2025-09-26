const express = require("express");
const Model = require("../Models/product");
const router = express.Router();
router.get("/getall", async (req, res) => {
  //res.send("Get All Products");
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getbyname/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const data = await Model.findOne({ name: name });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post("/add-product", async (req, res) => {
  try {
    const data = new Model({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
    });
    const dataSave = await data.save();
    res.status(200).json(dataSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.status(200).send(`Deleted ${data.name} Product`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
