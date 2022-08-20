const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/shark';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfull")
}).catch((e) => {
    console.log("Error" + e);
})
