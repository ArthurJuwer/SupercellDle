const ClashRoyale = require("../models/ClashRoyale");

async function index(req, res) {
    try{
        const cards = await ClashRoyale.GetAllCards();
        res.json(cards)
    } catch (err) {
        console.error("Erro ao buscar dados", err)
        res.status(500).json({erro: "Erro ao buscar dados"})
    }
}

module.exports = { index }

// lógica das requisições