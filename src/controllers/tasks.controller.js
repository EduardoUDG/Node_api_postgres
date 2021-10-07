const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'todo',
    port: '5432'
});


const getTasks = async(req, res) => {
    try {
        const data = await pool.query('SELECT * FROM tasks');
        res.status(200).json( data.rows );
    } catch (error) {
        res.status(500).json({
            msg: 'Algo sucedio mal en le servidor'
        });      
    }
}

const getTaskById = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await pool.query(
            'SELECT * FROM tasks WHERE id=$1',
            [id]
        );
        res.status(200).json( data.rows );
    } catch (error) {
        res.status(500).json({
            msg: 'Algo sucedio mal en le servidor'
        });      
    }
}


const createTask = async(req, res) => {
    try {
        const { description, status } = req.body;
        const { data } = await pool.query(
            'INSERT INTO tasks (description, status) VALUES($1, $2)',
            [description, status]
        );
    
        res.json({
            msg: 'Tasks created succesfully',
            data
        });
    } catch (error) {
        res.json({
            msg: 'Algo salio mal al crear tarea'
        })        
    }
}


const updateTask = async(req, res) => {
    try {
        const { id } = req.params;
        const { description, status } = req.body;

        const data = await pool.query(
            'UPDATE tasks SET description=$1 , status=$2 WHERE id=$3',
            [description, status, id]
        );
        res.json({
            msg:'Usuario actualizado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Algo paso mal en el servidor'
        });
    }
}

const deleteTask = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await pool.query(
            'DELETE FROM tasks WHERE id=$1',
            [id]
        );
        res.json({
            msg: 'Tarea eliminada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Algo sucedio mal al eliminar'
        });
    }
}


module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}

