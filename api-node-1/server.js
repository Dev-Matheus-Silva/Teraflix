// FUNÇÃO DESSE ARQUIVO: INICIALIZAR O SERVIDOR NO NODE.JS

const app = require("./src/app");
const PORT = 8080;
// 1313, 3000, 3030, 3333, 6000, 6060

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT)
//   console.log(`Servidor rodando na porta ${PORT}`)
});
