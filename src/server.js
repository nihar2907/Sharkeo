const express = require('express')
const app = express();
require('./db/conn')

const port = process.env.PORT || 3000;
//Models
const Users = require('./models/userSchema');

//get
app.get('/', (req, res) => {

    res.render('index')
})

// to get data from front end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//post
// app.post("/register", async (req, res) => {
//     console.log("In Registered")
//     try {

//         // GET THE  VALUE ENTERED FROM FORM
//         const registerperson = new Users({
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             email: req.body.email,
//             mobileNo: req.body.mobileNo,
//             password: req.body.password,
//             cpassword: req.body.cpassword,
//             address: req.body.address,
//             city: req.body.city,
//             state: req.body.state,
//         })
//         const createUser = await registerperson.save();
//         console.log(createUser)
//         res.status(201).render("index")

//     } catch (error) {
//         res.status(400).send(error)
//     }



// })



//port
app.listen(port, () => {
    console.log("Server is listening")

})