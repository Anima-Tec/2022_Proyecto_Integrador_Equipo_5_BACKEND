import jwt from 'jsonwebtoken';
import { IUserToken } from '../../interfaces/IUserToken';


export function generateToken(user: IUserToken ) {
    return jwt.sign({ user }, process.env.SECRET_KEY || 'secretkey', {
        expiresIn: 60 * 60 * 24
    });
    
}
