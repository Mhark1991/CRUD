const {sampleModel}  = require("../model/m_user")
const bcrypt = require("bcrypt");

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
        console.log(req.cookies)
        res.send(result)
        
    }
    catch(e){
        console.log(e)
        return e
    }
}

module.exports.createUser = async function(req, res){
    const {first_name, last_name, username, password} = req.body
    bcrypt.hash(password, 12).then((hash) => {
        sampleModel.create({
            first_name,
            last_name,
            username,
            password: hash,
        })
        .then(() => {
            res.json("USER REGISTERED");
        })
        .catch((err) => {
            if (err) {
                res.status(400).json({ error: err });
            }
        });
    });


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