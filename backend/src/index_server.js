const express=require('express');
const app =express();
const env=require('dotenv');
env.config();


app.get('/',(req,res,next)=>{
    res.status(200).json(
        {
            message:"hello from server"
        }
    );
});
app.listen(process.env.PORT,()=>{
    console.log(`server is runnung in ${process.env.PORT}`);
})