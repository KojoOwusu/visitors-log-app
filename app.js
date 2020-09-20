//const express = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const Path = require("path");
const LogBookEntry = require("./models/LogbookModel");
const db = require("./config/db");
var exphbs = require("express-handlebars");
const Morgan = require("morgan");
const cors = require("cors");
let Router = require("./routes/routes");

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//middlewaresss
app.use(Morgan("dev"));
app.use(express.static(Path.join(__dirname, "build")));
app.use(cors());
app.use("/api", Router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

db.authenticate()
	.then(() => {
		console.log("connection has been established successfully");
	})
	.catch(err => {
		console.error("unable to connect due to the following error ", err);
	});

const PORT = process.env.PORT || 7000;
//process.env.NODE_ENV = 'production';
const IP_ADDR = ""; // <------ insert ip address of server here

/*
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })
*/

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
