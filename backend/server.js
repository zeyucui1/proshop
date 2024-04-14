import express from 'express'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000
dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Server is ready')
})
app.use('/api/products', productRoutes)
// handle errors
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
