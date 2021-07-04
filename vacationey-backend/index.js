const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("Aplicatie ce iti spune ce sa iti impachetezi in functie de unde pleci in vacanta.");
});

app.listen(port, () => {
    console.log("Application started on port 8000");
})