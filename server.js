const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

mongoose.connect(process.env.MONGO_ATLAS || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}.`);
});