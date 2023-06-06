const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://surajpandey0094:0094@cluster0.7y7t9uy.mongodb.net/?tls=true"


const connectToMongo=()=>{
    mongoose.connect(
        mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }
      ).catch((e) => {
        console.log("error connecting to mongoose!",e);
      });
   
}

module.exports = connectToMongo;