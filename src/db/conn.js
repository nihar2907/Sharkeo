const mongoose = require('mongoose')

const db = '';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfull")
}).catch((e) => {
    console.log("Error" + e);
})
