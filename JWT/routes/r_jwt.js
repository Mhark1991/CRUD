const jwt = require("../controller/c_jwt")

module.exports.routeJWT = [
    {
        path: "/jwt/validate/:token",
        method: "get",
        action: jwt.validateToken
    },
    {
        path: "/jwt/create",
        method: "post",
        action: jwt.createTokens
    },
]