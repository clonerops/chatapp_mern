import User from '../models/user'
import bcrypt from 'bcrypt'
import _ from 'lodash'

const authController = {
    signup: async function (req:any, res:any) {
        try {
            const { firstName, lastName, email, password } = req.body

            const user = await User.findOne({ email: email })

            if (user) {
                return res.status(400).json({
                    message: 'کاربر قبلا در سامانه ثبت نام کرده است!'
                })
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = new User({
                firstName, lastName, email, password: hash
            })

            await newUser.save()
            return res.json({
                success: true,
                data: _.pick(newUser, ['_id']),
            });



        } catch (error) {
            return res.status(500).json({
                message: 'server error'
            })
        }
    }
}

export default authController