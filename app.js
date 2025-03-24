// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8080;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para listar arquivos na pasta 'public'
app.get('/', (req, res) => {
    const dirPath = path.join(__dirname, 'public');

    // Ler os arquivos do diretório 'public'
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao ler o diretório');
        }

        // Criar uma lista de arquivos HTML
        const fileList = files.map(file => {
            return `<li><a href="/${file}">${file}</a></li>`;
        }).join('');

        // Enviar a lista de arquivos como resposta
        res.send(`
            <html>
                <head><title>Lista de Arquivos</title></head>
                <body>
                    <h2>Lista de Arquivos</h2>
                    <ul>${fileList}</ul>
                </body>
            </html>
        `);
    });
});

// Rota para servir os arquivos
app.get('/:file', (req, res) => {
    const filePath = path.join(__dirname, 'public', req.params.file);
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});