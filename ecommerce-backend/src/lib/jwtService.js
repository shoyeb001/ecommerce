import jwt from 'jsonwebtoken';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
class jwtService {
    static sign(payload, expiry="2d", secret=process.en){
        return jwt.sign(payload, secret,{expiresIn:expiry})
    }
    static verify(token, secret = process.env.JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

export default jwtService;