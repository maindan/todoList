const {Task} = require('../models');

module.exports = class TaskController{
    static async getAll(req, res) {
        try {
            const tasks = await Task.findAll();
            res.status(200).json({tasks})
        } catch(err) {
            res.status(500).json({err})
        }
    }

    static async createTask(req, res) {
        try {
            const {title} = req.body;
            const task = await Task.create({
                title: title
            })
            res.status(200).json({task})
        } catch(err) {
            res.status(500).json({err})
        }
    }

    static async updateTask(req, res) {
        try {
            const task = await Task.findByPk(req.params.id);
            const {completed} = req.body;

            const taskUpdated = await task.update({
                completed: completed
            })
            res.status(200).json({taskUpdated})
        } catch(err) {
            res.status(500).json({err})
        }
    }

    static async deleteTask(req, res) {
        try {
            task = await Task.findByPk(req.params.id);
            await task.destroy();
            res.status(200).json({msg: "Task excluída com sucesso!"});
        } catch(err) {
            res.status(500).json({err})
        }
    }
}