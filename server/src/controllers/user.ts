import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
import _ from 'lodash'

const authController = {
    signup: async function (req: any, res: any) {
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
    },

    signin: async (req: any, res: any) => {
        try {
            const { email, password } = req.body
            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({
                    message: 'کاربر مورد نظر در سامانه ثبت نام نکرده است'
                })
            }
            // if(!email.include('@')){
            //     return res.status(400).json({
            //         message: 'ایمیل وارد شده نادرست می باشد'
            //     })
            // }

            if (user.password) {
                const isValidPassword = await bcrypt.compare(password, user.password)
                if (!isValidPassword) {
                    return res.status(400).json({
                        message: 'رمز عبور وارد شده نادرست می باشد'
                    })
                }
            }

            const token = jwt.sign({_id: user.id}, config.get('secret_key'))
            return res.status(200).json({
                message: true,
                access_token: token
            })

        } catch (error) {
            return res.status(500).json({
                message: 'server error'
            })
        }
    }
}

export default authController