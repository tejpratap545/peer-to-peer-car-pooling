const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.render("index", { message: null });
});


app.get("/login",async (req,res)=>{
    res.render("login",{message:null})
});
app.get("/signup", async (req, res) => {
  res.render("sign");
});

app.get("/signupr", (req, res) => {
  res.render("signupr", { message: null });
});

app.get("/signupd", (req, res) => {
  res.render("signupd", { message: null });
});

app.listen(3000, () => {
  console.log("listening to PORT 3000");
});
