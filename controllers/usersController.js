const register = async (req,res)=>{
    res.json({message:"SIGN-UP"})
}

const login  = async (req,res)=>{
    res.json({message:"LOGIN"});
}

module.exports = {register,login}