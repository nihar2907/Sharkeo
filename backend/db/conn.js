const mongoose = require('mongoose')
const db = "mongodb+srv://Sharkeoo:Sharkeoo@cluster0.t0bvv.mongodb.net/sharks?retryWrites=true&w=majority";
// const db = 'mongodb://localhost:27017/shark';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfull")
}).catch((e) => {
    console.log("Error" + e);
})