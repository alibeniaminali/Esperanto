import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'

const app = express()

const startServer = async () => {
  try {
    await mongoose.connect(dbURI)
    app.use(express.json())

    app.use((req, res, next) => {
      console.log(`Who's there?! ${req.url} + ${req.method}`)
      next()
    })

    app.use((req, res) => {
      return res.status(404).json({ message: 'failed to connect' })
    })

    app.listen(port, () => console.log(`Lovely jubbly, port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
startServer()