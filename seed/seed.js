import mongoose from 'mongoose'
import teacherData from './data/teachers.js'
import { dbURI } from '../config/environment.js'
import Teacher from '../models/teachermodel.js'
import User from '../models/usermodel.js'
import userData from './data/users.js'


const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('successful connection')

    await mongoose.connection.db.dropDatabase()
    console.log('dropped like it\'s hot')

    const users = await User.create(userData)
    console.log(`Woah woah, so many users ${users.length}`)

    const teachers = await Teacher.create(teacherData)
    console.log(`such teachers ${teachers.length}`)

    await mongoose.connection.close()
    console.log('adios senora')
  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
    console.log('adios senora')
  }
}

seedDatabase()