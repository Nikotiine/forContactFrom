const fetch = require("isomorphic-fetch");


async function verifyCaptcha(req,res,next){
    const verifyUrl =  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.captchaToken}`;
   fetch(verifyUrl,{method:"post"}).then((response)=>
       response.json()
   ).then((captcha_res)=>{
       if(captcha_res.success ===true){
           next();

       }
       else {
           next(res.status(403))
       }
   })

}
module.exports={verifyCaptcha}



