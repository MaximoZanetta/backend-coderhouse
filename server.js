const express = require('express')
const Contenedor = require('./index.js')


const PORT = process.env.PORT || 8080



const app = express()

let container = new Contenedor('./products.json')

app.get('/', (req,res) => {
    res.send('home page')

})


app.get('/products', async (req,res) => {
   const products = await container.getAll().then(res=> res)
   console.log('lista',products)
   res.send(products)
})

app.get('/randomProducts',async (req,res)=>{
    const products = await container.getAll()
    const random = Math.floor(Math.random()* products.length)
    res.send(products[random])
})


const server = app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

