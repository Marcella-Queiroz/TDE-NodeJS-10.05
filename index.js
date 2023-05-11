const server = require("./server") //Liga o conteudo do arquivo server com o conteudo do arquivo index

const port = 3000; //Define a porta


//Manda o servidor escutar
server.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
}) 