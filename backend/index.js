const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const blogsRoute = require('./routes/blogs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(blogsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));
