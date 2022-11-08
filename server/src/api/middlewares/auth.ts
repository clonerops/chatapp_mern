import jwt from 'jsonwebtoken';
import config from 'config';

const authMiddleware = {
    authenticateToken(req, res, next) {
        try {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]

            if (token == null) return res.sendStatus(401)
            let verifiedUser = jwt.verify(token, config.get('secret_key'));
            if (!verifiedUser) return res.status(401).send('Unauthorized request/ Not Verified')

            req.user = verifiedUser;

            next();
        } catch (e) {
            return e
        }
    }
}


export default authMiddleware;