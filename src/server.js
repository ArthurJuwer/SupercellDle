const express = require('express');
const cors = require("cors");
const db = require("./db_settings")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/clashroyale", (req, res) => {
    db.query("SELECT id, foto, nome, genero, tipo, raridade, elixir, lancamento, arena, ataque FROM clashroyale", (err, results) => {
        if(err){
            console.error("Erro ao buscar dados: ", err)
            res.status(500).json({ erro: "Erro ao buscar dados"})
        } else {
            res.json(results)
        }
    })
})



app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})