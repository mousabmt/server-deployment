module.exports=(req,res,next)=>{
    try {
      console.log("The User Is Authonticated.");
      next();
    } catch (error) {
        console.log(error);
    }
}