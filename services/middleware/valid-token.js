import jwt, { decode } from "jsonwebtoken"
import { constants } from "../utils/constants.js"
import { response } from "../utils/response.js"

const valid_token = (req, res, next) => {

    const { status, message } = constants.response

    const { authorization } = req.headers
    if (!authorization) return res.status(status.not_auth).json(response(false, message.not_auth))

    try {
        jwt.verify(authorization, process.env.TOKEN)

        next()
    } catch (error) {
        res.status(status.not_auth).json(response(false, message.not_jwt))
    }
}

const valid_token_get_question = (req, res, next) => {

    const { status, message } = constants.response;

    const { authorization } = req.headers;
    if (!authorization) return next()

    try {
        req.user = jwt.verify(authorization, process.env.TOKEN)

        next()
    } catch (error) {
        res.status(status.not_auth).json(response(false, message.not_jwt))
    }
};


export { valid_token, valid_token_get_question }