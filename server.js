const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Helloo there!");
})

app.post('/login',async(req,res)=>{

    try{
        const {email,password} = req.body;

        if(!email || email==null){
            return res.status(400).json({message:"Email cannot be empty!"})

        }

        if(!password || password==null){
            return res.status(400).json({message:"Password cannot be empty!"});
        }

        res.status(200).json({data:req.body,message:"Logged in successfully!"});

    }

    catch(err){
        return res.status(500).json({message:err.message});
    }

})

app.listen(PORT,()=>{
    console.log(`This server is running on port : http://localhost:${PORT}`);
});


