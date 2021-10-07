const { Router } = require('express');
const router = Router();

const { 
    getTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/tasks.controller')


router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


module.exports = router;