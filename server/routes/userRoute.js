const express = require('express');
const Admin = require('../models/Admin');
const Note = require('../models/Notes');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.json(admin);
    
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.post("/login",(async(req, res)=> {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email: email });
    //Compare password
    
      if (user && (await user.password === password)) {
          if (user){
             res.send({message: "Login Successfull", user: user})
          }
      res.status(201);
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error('Invalid login credentials');
    }
})
)

router.post("/student/login",(async(req, res)=> {
  const { cne, cni } = req.body;
  const user = await Note.findOne({ Cne: cne });
  //Compare password
  
    if (user && (await user.Cni === cni)) {
        if (user){
           res.send({message: "Login Successfull", user: user})
        }
    res.status(201);
    res.status(200);
  } else {
    res.status(401);
    throw new Error('Invalid login credentials');
  }
})
)


module.exports = { router };
