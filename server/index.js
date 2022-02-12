const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors=require("cors")
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
 var Pr = require('./database-mongo');
 var User = require('./database-mongo');

const mainfeedRoutes= require('./routes/getthefeed.routes')
const logger = require("morgan");
const profileRoutes = require("./routes/profile");
var ProfileBlog = require("./database-mongo");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');

const app = express();
const PORT = process.env.PORT || 3000;
 


app.use(express.json()); 
app.use(cors());
app.use(logger("dev"));
 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cors()); // Use this after the variable declaration

app.use("/api/mainfeed", mainfeedRoutes);

app.use("/api", itemRoutes);

app.use("/api/user", itemRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/pr", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
