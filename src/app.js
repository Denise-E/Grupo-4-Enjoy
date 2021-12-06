const express = require("express");
const app = express();
const path = require("path");

app.set("port", 3000);
app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:" + app.get("port")));

app.use(express.static(path.resolve(__dirname, "./public")));


app.get("/", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/index.html")));
app.get("/login", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/login.html")));
app.get("/productdetail", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/productDetail.html")));
app.get("/cart", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/cart.html")));
app.get("/register", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/register.html")));


