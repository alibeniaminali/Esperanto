import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/routes.js'
import 'dotenv/config' // only needs to be added if it doesn't already exist
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const startServer = async () => {
  try {
    await mongoose.connect(dbURI)
    app.use(express.json())

    app.use((req, res, next) => {
      console.log(`Who's there?! ${req.url} + ${req.method}`)
      next()
    })

    app.use('/api', router)

    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.use((req, res) => {
      return res.status(404).json({ message: 'failed to connect' })
    })

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })

    app.listen(port, () => console.log(`Lovely jubbly, port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
startServer()