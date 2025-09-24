const db = require("../config/db.config")

async function GetAllCards() {
    const [rows] = await db.query(
        "SELECT id, foto, nome, genero, tipo, raridade, elixir, lancamento, arena, ataque FROM clashroyale"
    );
    return rows;

}

module.exports = { GetAllCards }

// Consultas SQL (model)