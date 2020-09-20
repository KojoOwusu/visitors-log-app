const express = require("express");
let Router = express.Router();
const LogBookEntry = require("../models/LogbookModel");
const bodyParser = require("body-parser");
const Moment = require("moment");

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: false }));

const formatDate = dateString => {
	let newDate = Moment(dateString, "YYYY-MM-DD").format("D-M-YYYY");
	return newDate;
};

Router.get("/getLogs", (req, res, next) => {
	LogBookEntry.findAll({ order: [["id", "DESC"]] })
		.then(logs => {
			res.writeHead(200, { "content-type": "application/json" });
			results = logs.map((log, index) => {
				return log.toJSON();
			});

			results.forEach(Element => {
				Element.Date = formatDate(Element.Date);
			});
			console.log(results);
			res.end(JSON.stringify(results));
			//res.json({ response: results });
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

// post route to add a new entry into the log book
Router.post("/createLog", (req, res) => {
	let date = new Date();
	time = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
	date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

	let logEntry = {
		Date: date,
		Name: req.body.Name,
		Department: req.body.Department,
		Item: req.body.Item,
		ID_NO: req.body.id_no,
		Time_Out: time
	};

	LogBookEntry.create(logEntry)
		.then(results => {
			console.log(results);
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

//update route to add the time out and returned to entries whose items have been returned
Router.put("/editLog/:id", (req, res) => {
	let date = new Date();
	time = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;

	LogBookEntry.update(
		{ Returned: "Yes", Time_In: time },
		{
			where: {
				id: req.params.id
			}
		}
	)
		.then(() => {
			console.log("Entry successfully editted");
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(err);
			console.log(time);
			res.sendStatus(500);
		});
});

module.exports = Router;
