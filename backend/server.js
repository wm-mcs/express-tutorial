const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDb = require('./config/db');
const cors = require('cors');

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
