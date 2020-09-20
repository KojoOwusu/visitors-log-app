const Sequelize = require("sequelize");

module.exports = new Sequelize("Ict_visitors_log", "root", "root", {
	host: "localhost",
	dialect: "mysql",
	port: "8889",
	logging: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
