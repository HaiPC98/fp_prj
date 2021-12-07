// Connnect to Pg DB
var connectionString = "postgres://postgres:postgres@localhost:5432/ex1"

const Sequelize  = require('sequelize')

// const sequelize = new Sequelize('postgres://haipg98:hoanghaipc98@postgresql-61113-0.cloudclusters.net:19070/fp_demo')

const sequelize = new Sequelize('fp_demo', 'haipg98', 'hoanghaipc98',{
  host: 'postgresql-61113-0.cloudclusters.net',
  port: 19070,
  dialect: 'postgres',
  logging: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Ket noi thanh cong.');
  })
  .catch(err => {
    console.error('Ket noi that bai', err);
  });

module.exports = sequelize

// host: postgresql-61113-0.cloudclusters.net
// port: 19070
// ip address: 209.209.40.88
// username: haipg98
// password: hoanghaipc98


