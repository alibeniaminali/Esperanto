import Teacher from '../models/teachermodel.js'


export const allTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
    console.log('it\'s working!')
    return res.status(200).json(teachers)
  } catch (error) {
    console.log('ya fucked up')
  }
}

export const addTeacher = async (req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body)
    return res.status(200).json(newTeacher)
  } catch (error) {
    return res.status(422).json(error)
  }
}

export const getSingleTeacher = async (req, res) => {
  try {
    const { id } = req.params
    const teacher = await Teacher.findById(id)
    console.log(teacher)
    return res.status(200).json(teacher)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}