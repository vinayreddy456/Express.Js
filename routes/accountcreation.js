const Router=require('express');
const create=require('../Database/Schemas/acccreation');
const router=Router();
router.post('/create',async (req,res)=>{
    const{username,contactnumber,HostelName,category,price}=req.body;
    if(!username || !contactnumber || !HostelName || !category||!price) return res.send(400);
    const userdb= await create.findOne({$or:[{email},{contactnumber}]});
    if(userdb){
        return res.status(401).json({
            'msg':"user already exists",
        })
    }
    else{
        const newuser=await create.create({username,contactnumber,HostelName,category,price});
        return res.status(401).json({
        'msg':'Successfully Created',
        })
    }


})



module.exports=router;