import { Schema, model, connection} from "mongoose";
import { hash } from 'bcrypt'
import validator from 'validator';

type UserType = {
    name: string,
    email: string,
    password: string
    admin: boolean
}

const schema = new Schema<UserType>({
    name: {
        type: String,
         required: true
        },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email'] 
        },
    password:{
        type: String,
         required: true,
         minlength: [6, 'Minimum password length is 6 characters']
        },
    admin:{
        type: Boolean,
         required: true,
         default: false
        },
});

schema.pre('save', function(next){
    if(this.isModified('password')) {
        hash(this.password, 8, (err, hash) => {
            if(err) return next(err);

            this.password = hash;
            next();
        })
    }
})

const modelName: string = "User"

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<UserType>(modelName, schema)