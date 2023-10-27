 const user = require('../controller/c_user')

module.exports.routeUser = [
    {
        path: "/user/findOne/:user_id",
        method: "get",
        action: user.findOne
    },
    {
        path: "/user/findAll",
        method: "get",
        action: user.findAll
    },
    {
        path: "/user/register/",
        method: "post",
        action: user.createUser
    },
    {
        path: "/user/updateUser",
        method: "put",
        action: user.updateUser
    },
    {
        path: "/user/login",
        method: "post",
        action: user.loginUser
    }

]