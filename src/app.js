const express = require("express");
const app = express();
const path = require("path");

app.set("port", process.env.PORT || 3000);
app.set ("views", path.resolve (__dirname, "views"));
app.set ("view engine", "ejs");
app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:" + app.get("port")));

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require("./routes/main"));
app.use(require("./routes/products"));
app.use(require("./routes/users"));

app.use(require("./routes/admin"));
