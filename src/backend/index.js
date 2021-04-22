const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { 
    getTasks,
    getOneTask,
    deleteOneTask,
    updateTask,
    newTask,
    login,
    newUser
} = require('./controllers.js');

const PORT = 3000;
const app = express();

app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started at http://localhost${PORT}`);
});


app.get('/tasks', getTasks);
app.get('/tasks/:id', getOneTask);
app.delete('/tasks/:id', deleteOneTask);
app.put('/tasks/:id', updateTask);
app.post('/tasks', newTask);

app.get('/users', login);
app.post('/users', newUser);
