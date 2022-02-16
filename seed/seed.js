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

    const ownedTeachers = teacherData.map(teacher => {
      let reviewsArray = []
      if (teacher.reviews) {
        reviewsArray = teacher.reviews.map(review => {
          return { ...review, owner: users[0]._id }
        })
      }
      return { ...teacher, reviews: reviewsArray, owner: users[0]._id }
    })

    const teachers = await Teacher.create(ownedTeachers)
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