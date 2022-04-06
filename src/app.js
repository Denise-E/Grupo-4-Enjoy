const express = require("express");
const app = express();
const path = require("path");
const method = require("method-override");
const cookie = require("cookie-parser");
const session = require("express-session");
const cors = require('cors')


app.use(cors())
app.set("port", process.env.PORT || 3000);
app.set ("views", path.resolve (__dirname, "views"));
app.set ("view engine", "ejs");

app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:" + app.get("port")));

app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/uploads",express.static(path.resolve(__dirname, "../uploads")));
app.use(method("m"));
app.use(express.urlencoded({extended:true}));
app.use(cookie());
app.use(session({
    secret:"Secret",
    saveUninitialized: true,
    resave: false,
}))

app.use(require("./middlewares/user"))


app.use(require("./routes/main"));
app.use("/products", require("./routes/products"));
app.use("/users",require("./routes/users"));
app.use("/admins", require("./routes/admin"));
app.use("/categories", require("./routes/categories"));

app.use('/api/users', require('./routes/api/usersApi'))
app.use('/api/products', require('./routes/api/productsApi'))

