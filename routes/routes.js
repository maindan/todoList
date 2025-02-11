const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/api', (req, res) => {
    res.status(200).json({response: "Bem vindo a API de todoList!"})
})

router.get('/task', TaskController.getAll);
router.post('/task', TaskController.createTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;