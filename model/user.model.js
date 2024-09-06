import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type : String,
        require: true,
    },

    email: {
        type : String,
        require: true,
        unique : true
    },
    city: {
        type : String,
        require: true,
    },
    number: {
        type : Number,
        require: true,
        unique : true
    },

})

const User = mongoose.model('User', userSchema)

export default User