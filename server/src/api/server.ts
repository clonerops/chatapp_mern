import express from 'express'
import bodyParser from 'body-parser'
import api from './routes'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

export const runServer = (): void => {

    // Express Middleware
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(cors())
    app.use(helmet())

    // Routes
    app.use('/api', api)

    const port = process.env.PORT || 8000
    app.listen(port, () =>
        console.log(`Server is up on port: ${port} pid: ${process.pid}`))
        
}