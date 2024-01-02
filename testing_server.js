const express = require('express');
const path = require('path')

const app = express();
const current_page = path.join(__dirname + "/src/pages/home.html")
const port = 3000; // Você pode alterar a porta, se desejar

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(current_page);
});

app.post('/resposta', (req, res) => {
    const resposta = req.body.resposta;
    console.log(resposta)
    res.send("Obrigado pela resposta!");
});

app.listen(port, () => {
    console.log(current_page)
    console.log(`Servidor rodando em http://localhost:${port}`);
});