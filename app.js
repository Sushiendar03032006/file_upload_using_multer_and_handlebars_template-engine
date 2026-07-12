const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const multer=require("multer");
const ehb=require("express-handlebars");


const app=express();

app.engine("hbs",ehb.engine({
    extname:"hbs",
    layoutsDir:"views/layouts",
    defaultLayout:"main"
}))

app.set("view engine","hbs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})

const max=2*1024*1024;

const upload= multer({
    storage:storage,
    limits:{
        fileSize:max
    }
})

app.get("/",(req,res,next)=>{
    res.render("register")
})

app.post("/register",(req,res)=>{
    upload.single("file")(req,res,function(err){
       if (err instanceof multer.MulterError) {

           if (err.code === "LIMIT_FILE_SIZE") {
                 return res.send("<h1>Maximum file size is 2 MB.</h1>");
            }

            return res.send(`<h1>${err.name}</h1>`);
        }

           if(!req.file){
            return res.send("<h1>Please select a file</h1>"); 
           }

    res.render("result",{
        filename:req.file.filename
    })
    })

})


app.listen(4000,()=>{
    console.log("Server is running")
})