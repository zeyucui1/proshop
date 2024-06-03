import express from 'express'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000
dotenv.config()
connectDB()

const app = express()

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookie parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Server is ready')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
// handle errors
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
