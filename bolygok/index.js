// modulok meghivasa 
const express = require('express'); 
const mysql = require('mysql2'); 
const cors = require('cors');
const bodyparser = require('body-parser');
 
// app valtozoba taroljuk az express osszes methodusat 
//  a bodyparser pedig az osszes adatot json-be fogja atalakitani 
const app = express(); 
app.use(bodyparser.json());
app.use(cors());

//  Kapcsolat letrehozasa az adatbazissal 
const db = mysql.createConnection({ 
    host: '127.0.0.1', 
    user: 'root', 
    password: '', 
    database: 'bolygok' 
}); 
db.connect(err =>{ 
     if (err) throw err; 
    console.log('Sikeresen csatlakozott az adatbazishoz!'); 
});

// Osszes adat kiiratasa 
app.get('/planet', (req, res) => { 
    const query = 'SELECT * FROM planet'; 
    db.query(query, (err, results) =>{ 
        if (err) throw err; 
        res.json(results);
    }) 
});

 //  Adat modositas 
app.put('/planet/:id', (req, res) => { 
    const {id} = req.params; 
    const {hanyadik} = req.body; 
    const query ='UPDATE planet SET hanyadik = ? WHERE id = ?';  
    db.query(query, [hanyadik, id], (err, results) =>{ 
        if (err) throw err; 
        res.send('Sikeresen modositotta az adatot!');
    }) 
});

 //  Uj adat hozzaadas 
app.post('/planet', (req, res) => { 
    const {nev, hanyadik, halmazallapot } = req.body; 
    const query ='INSERT INTO planet (nev, hanyadik, halmazallapot) VALUES (?, ?, ?)'; 
    db.query(query, [nev, hanyadik, halmazallapot], (err, results) =>{ 
        if (err) throw err; 
        res.send('Sikeresen hozzaadta az uj adatot!');
    }) 
});

 //  Torles 
app.delete('/planet/:id', (req, res) => { 
    const {id} = req.params; 
    const query ='DELETE FROM planet WHERE id = ?';  
    db.query(query, [id], (err, results) =>{ 
        if (err) throw err; 
        res.send('Sikeresen torolte az adatot!');
    }) 
});

// szerver
const port = 3000; 
app.listen(port, () =>{ 
    console.log('A szerver fut: http://localhost:3000'); 
});