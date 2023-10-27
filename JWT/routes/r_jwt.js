const jwt = require("../controller/c_jwt")

const routeJWT = [
    {
        path: "/jwt/validate",
        method: "get",
        action: jwt.validateToken
    },
    {
        path: "/jwt/create",
        method: "post",
        action: jwt.createTokens
    },
]