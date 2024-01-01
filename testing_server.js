const express = require('express');
const app = express();
const port = 3000; // Você pode alterar a porta, se desejar

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Pergunta Importante</title>
        </head>
        <body>
            <div style="text-align: center;">
                <h1>Vai sair comigo?</h1>
                <form method="post" action="/resposta">
                    <input type="submit" id="sim" name="resposta" value="sim"><br>

                    <input type="submit" id="nao" name="resposta" value="nao"><br>

                    <br>

                     
                    
                    </form>
            </div>
        </body>
        </html>
    `);
});

app.post('/resposta', (req, res) => {
    const resposta = req.body.resposta;
    console.log(resposta)
    res.send("Obrigado pela respostas!");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});