const { request } = require('express');
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

//---------------------------------------------






app.listen(port, () => {
    console.log('ppp', port)
})

