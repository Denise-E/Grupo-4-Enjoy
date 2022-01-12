const express = require("express");
const app = express();
const path = require("path");
const method = require("method-override");

app.set("port", process.env.PORT || 3000);
app.set ("views", path.resolve (__dirname, "views"));
app.set ("view engine", "ejs");
app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:" + app.get("port")));

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../uploads")));
app.use(method("m"));
app.use(express.urlencoded({extended:true}));


app.use(require("./routes/main"));
app.use("/products", require("./routes/products"));
app.use(require("./routes/users"));

app.use("/admins", require("./routes/admin"));
