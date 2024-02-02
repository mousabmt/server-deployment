module.exports=(error,req,res,next)=>{
    try {
    
        res.status(500).json({
            message:'Error!',
            Route:req.originalUrl,
            query:req.query,
            body:req.body,
            Error:`Server Error : ${error.message}`
        })
    } catch (error) {
        console.log(error);
    }
}