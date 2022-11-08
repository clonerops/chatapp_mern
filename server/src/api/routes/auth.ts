import express from 'express'
import authController from '../../controllers/user'

const router =  express.Router()

router.post('/signup', authController.signup)

export default router