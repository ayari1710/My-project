
const mongoose=require("mongoose")


const connectDB=async()=>{
try {
 await    mongoose.connect(process.env.MONGO_URI,{

    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify :true
 });
    console.log('data base is connected');
} catch (error) {
    console.log('is not connected');
}
}
 module.exports= connectDB;