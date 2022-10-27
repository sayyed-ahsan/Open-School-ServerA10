const { request, response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());






//-------------------------------------------
const courses = require('./data/courses.json')

app.get('/', (req, response) => {
    response.send('new api is run ')
});

app.get('/courses', (req, response) => {
    response.send(courses)
});

app.get('/coursedetail/:id', (req, response) => {
    const id = req.params.id
    const courseDetails = courses.find(course => id == course.id)
    response.send(courseDetails)
});

//---------------------------------------------






app.listen(port, () => {
    console.log('ppp', port)
})

