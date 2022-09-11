// FUNÇÃO DESSE ARQUIVO: INICIALIZAR O SERVIDOR NO NODE.JS
const app = require("./src/app");
const PORT = 8080;



console.log("app")

//APP.LISTEN (PORTA, FUNÇÃO ANÔNIMA)

app.listen(PORT,() => {
console.log(`servidor rodando na porta ${PORT}`)   
})
