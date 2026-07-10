exports.getRegister = (req,res)=>{
    res.render("students/register",{
        pageTitle:"Student Registeration"
    })
}

exports.postRegister = (req,res)=>{
    res.render("students/success",{
        pageTitle:"Success",

        name:req.body.name,
        email:req.body.email,
        course:req.body.course,
        year:req.body.dob
    })
}