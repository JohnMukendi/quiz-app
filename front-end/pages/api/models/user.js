const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    userName : {
        type:String,
        required:true
    },
    userEmail : {
        type:String,
        required:true,
        unique : true
    },
    category : {
        type : String,
        required:true
    },
    difficulty : {
        type : String,
        required : true
    },
    points : {
        type : Number,
    }

},{timestamps:true}
)

//const user = mongoose.model('user',userSchema);

module.exports  = mongoose.models.quizUser || mongoose.model('quizUser',userSchema)