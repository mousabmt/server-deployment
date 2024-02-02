module.exports=(req,res,next)=>{
    try {
    req.body={
        message:"Hi"
    }
    console.log(req.body);
        next();
    } catch (error) {
        console.log(error);
    }
}