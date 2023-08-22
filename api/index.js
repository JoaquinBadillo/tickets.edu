const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('static'));

// API routes
const indexRouter = require('./routes/index');

app.use('/api', indexRouter);

app.listen(port, () => {
    console.log(`Local: http://localhost:${port}`);
    }
);