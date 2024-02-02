module.exports=(req,res,next)=>{
    req.date=new Date();
    next();
}