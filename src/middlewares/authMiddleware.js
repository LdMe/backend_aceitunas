
import jwt from "jsonwebtoken";

const isAuthenticated = (req,res,next) =>{
    const token = req.query.token;
    try{
        const decoded = jwt.verify(token,process.env.JSON_SECRET);
        console.log(decoded);
        req.user = decoded.user;
        next();
        
    }
    catch(e){
        console.log(e.message);
        res.status(401).send("authentication failed");
    }
}

export default isAuthenticated;