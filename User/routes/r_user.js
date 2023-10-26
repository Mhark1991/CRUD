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
        path: "/user/createUser/",
        method: "post",
        action: user.createUser
    },
    {
        path: "/user/updateUser",
        method: "put",
        action: user.updateUser
    },

]