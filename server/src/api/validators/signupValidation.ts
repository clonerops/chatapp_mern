import { validate } from "../middlewares/validation";

import { body } from "express-validator";

export const signupValidator = validate([
    body('email')
    .isEmail()
    .withMessage('ایمیل معتبر نمی باشد')
    .normalizeEmail(),
    body('firstName')
    .isLength({max: 200}),
    body('lastName')
    .isLength({max: 200})
])