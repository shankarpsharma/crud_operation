const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flip', {  
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch((reason) => console.log('Connection failed', reason));
module.exports=mongoose
