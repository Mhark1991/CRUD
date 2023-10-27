
const crypto = require('crypto')
const { sign, verify } = require("jsonwebtoken");


const createTokens = (req, res) => {
  const accessToken = sign(
    { username: req.body.username },
    "changeforjwtsecret"
  );

  res.send(accessToken);
};

const validateToken = (req, res, next) => {
    const accessToken = req.params["token"];
    console.log(accessToken)
    if (!accessToken)
      return res.status(400).json({ error: "User not Authenticated!" });
  
    try {
      const validToken = verify(accessToken, "changeforjwtsecret");
      if (validToken) {
        req.authenticated = true;
        return(true)
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  };
  
module.exports = { createTokens, validateToken };