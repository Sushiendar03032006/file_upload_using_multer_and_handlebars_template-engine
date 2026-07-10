const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const ebs=require("express-handlebars");

const app=express();

const studentRoutes= require("./routes/students");

app.engine("hbs",ebs.engine({
    extname:"hbs",
    layoutsDir:"views/layouts",
    defaultLayout:"main"
}))

app.set("view engine","hbs");
app.set("views","views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

app.use(studentRoutes);

app.use((req,res)=>{
    res.status(404).render("404");
})

app.listen(3000,()=>{
    console.log("Server is Running")
})