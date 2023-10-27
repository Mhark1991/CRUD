const {sampleModel}  = require("../model/m_user")
const bcrypt = require("bcrypt");
const axios = require('axios')


validateToken = async function(token){
    axios.get(process.env.JWT_API+ '/jwt/validate/'+ token).then(resp => {
        if(!resp){
            return('Not Authorized')
        }
    });
}

module.exports.findOne = async function(req, res){
    try{
        await validateToken(req.cookies['access-token'])

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
        await validateToken(req.cookies['access-token'])

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

    await validateToken(req.cookies['access-token'])

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
        await validateToken(req.cookies['access-token'])
        
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

module.exports.loginUser = async function(req, res){
    const { username, password } = req.body;

    const user = await sampleModel.findOne({ where: { username: username } });
    let userpass = user.password
    bcrypt.compare(password, userpass).then((match) => {
        if (!match) {
          res
            .status(400)
            .json({ error: "Wrong Username and Password Combination!" });
        }
    });
    const response = await axios.post(process.env.JWT_API+'/jwt/create',{username:username})
    res.cookie("access-token", response.data, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });
    res.json("LOGGED IN");
}

