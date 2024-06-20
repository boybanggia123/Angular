const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const indexRouter = require('./routes/index');
const routerProjects = require('./routes/routesProjects'); 
const routerEmployees = require('./routes/routesEmployees');
const routerTasks = require('./routes/routesTasks');
const routerUsers = require('./routes/routesUsers');
const routerForm = require('./routes/form');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/auth',routerForm);
app.use('/users', routerUsers);
app.use('/projects', routerProjects); 
app.use('/employees', routerEmployees);
app.use('/tasks', routerTasks);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng http://localhost:${PORT}`);
});
