import userModel from "../models/user-model.js"
import bcrypt from 'bcrypt'
import uuid from 'uuid'

class UserService{
    async registration(email, password){
        const condidat = await userModel.findOne({email})
        if(condidat){
            throw new Error("такой пользователь уже сущ")
        }
        const hashPasswor = bcrypt.hashSync(password, 3)
        const activationLink = uuid.v4() ///domen/5000/auth/activate/v32-vfdsvsdf-vdfvfssfdjk
        const user = userModel({email, password:hashPasswor})
    }
}
export default new UserService()