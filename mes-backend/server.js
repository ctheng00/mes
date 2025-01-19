const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db/connection');
const productionRoutes = require('./routes/production');
const qualityControlRoutes = require('./routes/qualityControl');
const dashboardRoutes = require('./routes/dashboard');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/production', productionRoutes);
app.use('/quality', qualityControlRoutes);
app.use('/dashboard', dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});