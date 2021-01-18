const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb,{useNewUrlParser:true,useUnifiedTopology: true, useFindAndModify: false,useCreateIndex: true})
.then(()=> {
    console.log(`Connected to ${process.env.mongodb}`)
}).catch(err=> console.error(err));