const {
    db
} = require('./db.js');

const ObjectId = require('mongodb').ObjectId

const database = db();


async function getTasks(req, res) {
    const {
        q
    } = req.query;
    const tasks = (await database).collection('tasks');
  
    tasks.find({}).toArray((err, result) => {
        if (err) {
            return res.status(400);
        } else if (q) {
            return res.status(200).json(result.filter(task => task.title.toLowerCase().includes(q.toLowerCase())));
        }
        
            return res.status(200).json(result);
    });
}

async function getOneTask(req, res) {
    const {
        id
    } = req.params;
    const tasks = (await database).collection('tasks');

    tasks.find({}).toArray((err, result) => {
        if (err) {
            res.status(400);
        };

        res.status(200).json(result.filter(task => '' + task['_id'] === id));
    });
}

async function deleteOneTask(req, res) {
    const {
        id
    } = req.params;
    const task = {
        _id: ObjectId(id)
    };
    const tasks = (await database).collection('tasks');

    tasks.deleteOne(task, (err, result) => {
        if (err) {
            res.status(400);
        };

        res.status(204).json(`task with id:${id} deleted`);
    });
}

async function updateTask(req, res) {
    const {
        id
    } = req.params;
    const task = {
        _id: ObjectId(id)
    };

    const bodyParams = Object.assign({}, req.body, task);
    const newValues = {
        $set: bodyParams
    };

    const tasks = (await database).collection('tasks');

    tasks.updateOne(task, newValues, (err, result) => {
        if (err) {
            res.status(400);
        };

        res.status(200).json(newValues);
    });
}

async function newTask(req, res) {
    const task = Object.assign({}, req.body, {
        creationDate: Date.now(),
    });

    const tasks = (await database).collection('tasks');

    tasks.insertOne(task, (err, result) => {
        if (err) {
            res.status(400);
        };

        res.status(200).json(task);
    });
}

module.exports = {
    getTasks,
    getOneTask,
    deleteOneTask,
    updateTask,
    newTask
};