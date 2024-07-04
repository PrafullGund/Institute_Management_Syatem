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

const getAllUserController=(req,res)=>{
    usersService.getAllUserService((error,result)=>{
        if(error){
            res.status(500).json({success:false, message:error.message});
        }else{
            res.status(200).json({success:true, data:result});
        }
    })
}

const getUserByIdController=(req,res)=>{
    const userId=req.params.id;
    usersService.getUserByIdService(userId,(error,result)=>{
        if(error){
            res.status(500).json({success:false, message:error.message});
        }else{
            if(result.length===0){
                res.status(404).json({success:false, message:'User Not Found'})
            }else{
                res.status(200).json({success:true, data:result[0]})
            }
        }
    })
}

const updateUserController=(req,res)=>{
    const userId=req.params.id;
    const userData=req.body;
    usersService.updateUserService(userId,userData,(error,result)=>{
        if(error){
            res.status(500).json({success:500, message:error.message});
        }else{
            if(result.affectedRows>0){
                res.status(200).json({success:true, message:'User Updated Successfully'});
            }else{
                res.status(404).json({success:false, message:'User Not Found'});
            }
        }
    })
}

const deleteUserController=(req,res)=>{
    const userId=req.params.id;
    usersService.deleteUserService(userId,(error,result)=>{
        if(error){
            res.status(500).json({success:500,message:error.message});
        }else{
            if(result.affectedRows>0){
                res.status(200).json({success:true,message:'User Delete Successfully'});
            }else{
                res.status(404).json({success:false,message:'User Not Found'});
            }
        }
    })
}

module.exports={
    createUsersController,
    getAllUserController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}