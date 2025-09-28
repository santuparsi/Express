const expess=require('express');
const mongoose=require('mongoose');
const app=expess();
app.use(expess.json()) //to Parse Json body
// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));
//import product model
const Product=require('./models/product');

// READ (Get all products)
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});
// READ (Get product by ID)
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send({ message: "Product not found" });
        res.send(product);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(9000,()=>{
    console.log('Server is Running at 9000');
})