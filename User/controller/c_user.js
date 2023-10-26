const {sampleModel}  = require("../model/m_user")


module.exports.findOne = async function(req, res){
    try{
        
        const result = await sampleModel.findOne({ where:{id:req.params.user_id} })

        if(result){
            res.send(result)
        } else{
            res.send('No data found!')
        }
    }
    catch(e){
        console.log(e)
        return e
    }
}

module.exports.findAll = async function(req, res){
    try{
       
        const result = await sampleModel.findAndCountAll()
        
        res.send(result)
        
    }
    catch(e){
        console.log(e)
        return e
    }
}

module.exports.createUser = async function(req, res){
    try{

        createuser = sampleModel.create(req.body)
        if(createuser){
            res.send(creatuser)
        }
    }
    catch(e){
        console.log(e)
        return e
    }
}

module.exports.updateUser = async function(req, res){
    try{
        let user = sampleModel.update({
            ...req.body,
            where: { id:req.params.user_id}
        })
        return user
    }
    catch(e){
        console.log(e)
        return e
    }
}