export default class Authentication {

    static validateApiKey(req, res, next){
        if(!req.header('api-key') || 
            req.header('api-key') !== process.env.API_KEY){
            res.status(403)
            res.end()
        }
        next();
    }

}
