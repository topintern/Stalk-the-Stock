const User = require("../models/user");
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 6 });


exports.signup = async (req, res, next)=>{
    console.log(req.body);
    if (!req.body) {
        return res.status(400).json({ statusCode: 400, message: "Insufficient data" });
    }

    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
        return res.status(409).json({ statusCode: 409, message: 'Invalidddd email' });
    }

    const {email} = req.body;
    const userExist = await User.findOne({email});
    if (userExist){
      
     return  res.status(400).json({
        success: false,
        message: "E-mail already exists"
     })
    }

    if (req.body.phone.length !== 10) {
        return res.status(409).json({ statusCode: 409, message: 'Mobile No should be 10 characters' });
    }

    

    try {
        req.body.uid = uid.rnd();
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
         })
        
    }
   
}
