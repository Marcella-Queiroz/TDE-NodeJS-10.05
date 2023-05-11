//1
const express = require("express"); //2

const server = express(); //3

server.use(express.json());

//Produtos
let products = [
    {id: 1, name:"Salada de frutas", descrição:"Frutas em cubos diversas", isDone: true},
    {id: 2, name:"Sanduiche", descrição:"Pão,salada e presunto", isDone: false},
    {id: 3, name:"Bolo Vulcão", descrição:"Bolo de chocolate com cobertura de brigadeiro", isDone: true}
]

//4,5,6
server.get("/products",(req, res) => {
    res.json({
        products
    })//7
} )

//Adicionar um novo recurso na aplicação
server.post("/products",(req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.jason({status: "Ok"})
})

//Uptate
server.put("/products/:id",(req,res) => {
    const id = Number(req.params.id);
    products.forEach(products => {
        if(product.id === id) {
            product.name = req.body.name;
            product.price = req.body.price;
        }
    })
    res.json({status: "Ok"})
})

//Deletar produto
server.delete("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    products = products.filter((product)=>{
        return product.id != id;
    })
    res.json ({status: "Ok"})
})

//8
module.exports = server;


/*    EXPLICAÇÕES     */
//1 - Define servidor
//2 - Importa o Express
//3 - Constroi o servidor
//4 - req - requisição
//5 - res - resposta
//6 - Adiciona recurso (Que é o recurso "/") (Quando fizer um get no servidor (Abrir) essa função é executada)
//7 - Decide como valida
//8 - Módulo que vai configurar o server