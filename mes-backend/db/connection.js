const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mes', 'postgres', 'Qqqwww', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { sequelize };