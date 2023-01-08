import Product from '../model/product.schema.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}