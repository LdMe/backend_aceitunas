import jwt from "jsonwebtoken";


const login = (req,res)=>{
    const {username,password} = req.query;
    const token = jwt.sign({user:username},process.env.JSON_SECRET,{expiresIn:"10m"});
    res.json({token});
}

export default{
    login
}

