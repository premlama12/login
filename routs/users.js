const express = require('express');

const router = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register pages
router.get('/register', (req, res) => res.render('register'));

//Register Handle
router.post('/request',(req, res) =>{
    const { name,email,password,password2 }=req.body;
    let errors = [];


    //check required information
    if(!name || !email ||!password || !password2){
        errors.push({msg: 'Please fill in alll fields'});
    }


    //check password match
    if(password != password2){
        errors.push({msg: 'Password do not match'});
    }


    //check password length
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if(errors.length > 0){
        res.render('register',{
            error,
            name,
            email,
            password,
            password2
        });
    }else{
        res.send('pass');
    }

});

module.exports=router;
