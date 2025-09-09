import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () =>{
    const MONGO_URI = process.env.MONGO_URI;
    console.log("Mongo URI : ", MONGO_URI)

    try{
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(" Mongo DB connected sucessfull : ",MONGO_URI)
    } catch (err) {
        console.error('Error while connecting database', err.message)
        process.exit(1)
    }
}

export default connectDB