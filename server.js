const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/Userroutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use('/api/users', userRoutes);

app.use('/api/records', recordRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
res.send("Finance Dashboard API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});