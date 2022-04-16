import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import {users} from './seeders/users';
import {projects} from './seeders/projects';
import {projectassignments} from './seeders/projectassignments';

// const createUsers = () => {
//     users.map(user =>{
//         db.User.create(user)
//     })
// }
// createUsers();

// const createProjects = () => {
//     projects.map(project =>{
//         db.Project.create(project)
//     })
// }
// createProjects();

// const createProjectAssignments = () => {
//     projectassignments.map(projectassignment =>{
//         db.ProjectAssignment.create(projectassignment)
//     })
// }
// createProjectAssignments();

// db.ProjectAssignment.create({
//     ProjectId: 1,
//     UserId: '9d14995c-0cc4-4e82-a9fd-7ba1ed1b4ce7'
// })

// db.User.findAll({
//     include: {
//         model: db.Project
//     }
// }).then((result: object) => console.log(JSON.stringify(result))).catch((err: object) => console.error(err));

app.get('/', (req, res) => {
    db.User.findAll({
        include: {
            model: db.Project
        }
    }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

db.sequelize.sync().then(() =>{
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
});