const express = require(`express`);
const app = express();
const cors = require('cors');
const { json } = require('body-parser');

app.use(cors());

app.get('/', (req, res) => {
    res.send(JSON.parse(`{ "name":"John", "age":30, "city":"New York"}`));
});

app.listen(8000);