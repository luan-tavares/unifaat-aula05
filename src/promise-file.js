const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '../storage/arquivo.txt');
console.log(fs.readFile(filePath, 'utf8'));

return;


(async (relativePath) => {
    try {
        const filePath = path.resolve(__dirname, relativePath);
        const data = await fs.readFile(filePath, 'utf8');
        console.log('Conteúdo do arquivo:\n', data);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
})('../storage/arquivo.txt');