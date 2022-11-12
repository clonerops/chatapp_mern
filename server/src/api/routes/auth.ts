import express from 'express'
import authController from '../../controllers/user'
import { signinValidator } from '../validators/signinValidation'
import { signupValidator } from '../validators/signupValidation'

const router = express.Router()

router.post('/signup', signupValidator, authController.signup)
router.post('/signin', signinValidator, authController.signin)

export default router