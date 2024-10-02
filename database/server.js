// server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./apartamentos.db");

// Ruta para obtener todos los inmuebles
app.get("/apartamentos", (req, res) => {
    db.all("SELECT * FROM apartamentos", [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows);
    });
});

// Ruta para agregar un nuevo inmueble
app.post("/apartamentos", (req, res) => {
    const { ID, TIPO, CLASE, imagen } = req.body;
    db.run(
    `INSERT INTO apartamentos (ID, TIPO, CLASE, imagen) VALUES (?, ?, ?, ?)`,
    [ID, TIPO, CLASE, imagen],
    function (err) {
            if (err) {
                res.status(500).send(err.message);
                return;
            }
        res.status(201).json({ id: this.lastID });
        }
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
