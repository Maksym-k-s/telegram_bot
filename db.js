const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'telegram_bot',
    'telegramBot',
    'maqim1981',
    {
        host: 'rds-postgresql-10mintutorial.comhgox4sv40.us-east-1.rds.amazonaws.com',
        port: '5432',
        dialect: 'postgres'
    }

)