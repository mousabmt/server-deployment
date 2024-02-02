module.exports=(req,res)=>{
    try {
        console.log(req);
        res.status(404).json({
            message:'Page Not Found!',
            Route:req.originalUrl
        })
    } catch (error) {
        console.log(error);
    }
}