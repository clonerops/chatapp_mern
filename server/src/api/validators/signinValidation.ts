import { validate } from '../middlewares/validation'

import { body } from 'express-validator'

export const signinValidator = validate([
    body('email')
    .isEmail()
    .withMessage('ایمیل معتبر نمی باشد')
])
