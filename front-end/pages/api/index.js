const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
function connect(){
    console.log('connecting ....')
    const dburl = 'mongodb+srv://JohnMukendi:Mukendi3101@cluster0.k0d6q.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(dburl,{dbName:'Quiz-App',usenewUrlParser:true,useUnifiedTopology:true})
    
};




export default connect
