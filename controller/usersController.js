const usersService=require('../service/usersService');
const {usersJoi}=require('../validations/usersValidations');

const createUsersController=(req,res)=>{
    const { error } = usersJoi.validate(req.body);

    if(error){
        return res.status(400).send({
            message:error.details[0].message,
        });
    }
    usersService.createUserService(req.body,(error,result)=>{
        if(error){
            res.status(500).json({success:false, message:error.message});
        }else{
            res.status(200).json({success:true, message:'User Added'});
        }
    })
}

module.exports={
    createUsersController
}