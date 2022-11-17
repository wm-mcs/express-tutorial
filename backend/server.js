const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/postRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
