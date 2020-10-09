const express=require('express');
const app =express();
const env=require('dotenv');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
env.config();

//mongodb connection 
//mongodb+srv://root:<password>@cluster0.bypdf.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.bypdf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
     {useNewUrlParser: true,
     useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connected");
    });

app.get('/',(req,res,next)=>{
    res.status(200).json(
        "hello from server"
        
    );
});
app.use(bodyParser());///app.use(express.json());
app.post('/data',(req,res,next)=>{
        res.status(200).json(
             req.body
        );
});

app.listen(process.env.PORT,()=>{
    console.log(`server is runnung in ${process.env.PORT}`);
})