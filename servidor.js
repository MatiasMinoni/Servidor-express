const express = require('express');
const app = express();

const PORT= process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/productos', (req, res) => {
    res.send('Productos!');

})
let visitas = 0;
app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas es de: ${++visitas}`);
})
app.get('/productoRandom', (req, res) => {
    res.send('Productos Random');
   
})

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

