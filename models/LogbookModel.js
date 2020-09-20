const Sequelize = require("sequelize");
const db = require("../config/db");

const LogBookEntry = db.define(
	"VisitorsLogbook",
	{
		Date: {
			type: Sequelize.DATE,
			allowNull: false
		},
		Time_In: {
			type: Sequelize.TIME,
			allowNull: true
		},
		Name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Department: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Item: {
			type: Sequelize.STRING,
			allowNull: false
		},
		ID_NO: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		Time_Out: {
			type: Sequelize.TIME,
			allowNull: false
		},
		Returned: {
			type: Sequelize.ENUM("Yes", "No"),
			allowNull: true
		}
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

module.exports = LogBookEntry;
