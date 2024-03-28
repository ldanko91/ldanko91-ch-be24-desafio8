import { Router } from "express";
import mockProducts from "../../test/mockProducts/mockProducts.test.js";
const testRouter = Router();


testRouter.get('/mockingproducts',  async (req, res) => {
    const products = mockProducts(100)
    res.render('mockingProducts', {
        products,
        title: "Listado de productos"
    })
})

testRouter.get('/mockingproducts/:qProds',  async (req, res) => {
    const qProds = parseInt(req.params.qProds)
    const products = mockProducts(qProds)
    res.render('mockingProducts', {
        products,
        title: "Listado de productos"
    })
})

export default testRouter;