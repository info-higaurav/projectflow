import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

dotenv.config({
    path:"./.env"
})
app.use(cors({
    origin:true,
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

// importing routes
import userRoutes from './routes/users'

// config routes
app.use('/api/v1/users', userRoutes)

export default app;