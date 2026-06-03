// index.js
import express from 'express';
import { check, validationResult } from 'express-validator';
import mysql from 'mysql2/promise'; 

const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatos'
});
//ejercicio1
app.post('/categorias', async (req, res) => {
    await check('nombre')
        .notEmpty().withMessage('El nombre no puede ir vacio')
        .run(req);
    await check('descripcion')
        .notEmpty().withMessage('La descripcion no puede ir vacívacia')
        .run(req);

    const resultado = validationResult(req);

    if (!resultado.isEmpty()) {
        return res.status(400).send({ mensaje: resultado.array() });
    }

    try {
        const { nombre, descripcion } = req.body;
        await pool.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );

        res.status(201).send({ mensaje: 'Categoria insertada correctamente' });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al conectar con la base de datos', error: error.message });
    }
});
//ejercicio2
app.get('/categorias', async (req, res) => {
    try {
        const [filas] = await pool.query('SELECT * FROM categorias');        
        res.status(200).json(filas);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener las categorias', error: error.message });
    }
});
//ejercicio3
app.get('/categorias/:id', async (req, res) => {
    const id  = req.params.id;
    try {
        const [categoria] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
        res.status(200).json({
            categoria: categoria[0]
        });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los datos', error: error.message });
    }
});
//ejercicio4
// PATCH /categorias/:id
app.patch('/categorias/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const [resultado] = await pool.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?', 
            [nombre, descripcion, id]
        );
        res.status(200).send({ mensaje: 'Categoria actualizada correctamente' });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar', error: error.message });
    }
});
//ejercicio5
app.delete('/categorias/:id', async(req, res) => {
    const id = req.params.id;
    const [resultado] = await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
    res.send({mensaje: 'Categoria eliminado correctamente'});
});
const puerto = 3001;
app.listen(puerto, () =>
    console.log(`Servidor en http://localhost:${puerto}`));