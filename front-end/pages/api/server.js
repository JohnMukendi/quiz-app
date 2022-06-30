const mongoose = require('mongoose');
import connect from './index'
import User from './models/user'

export default async function handler (req,res){
   
    switch (req.method) {
        case 'GET':
            console.log('get request')
            const users = await User.find()
            console.log(users)
            res.status(200).json({message:users})
            break;
            
        case 'POST':
            await connect()        
            console.log('connected to quiz-app-DB')
            const body = req.body
            console.log(body)
            const quizer = new User({
                userName:body.userName,
                userEmail:body.email,
                category : body.category,
                difficulty : body.difficulty
            })
            const result = await quizer.save();
            console.log('RESPONSE: ',result)
            res.status(200).json(result)

            break;            
        default:
            res.json({error:`${req.method} is an undefined method`})
            break;
    }
}