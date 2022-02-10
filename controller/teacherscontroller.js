import Teacher from '../models/teachermodel.js'


export const allTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
    console.log('it\'s working!')
    return res.status(200).json(teachers)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const addTeacher = async (req, res) => {
  try {
    req.body.owner = req.currentUser._id
    const newTeacher = await Teacher.create(req.body)
    return res.status(200).json(newTeacher)
  } catch (error) {
    return res.status(422).json({ message: error.message })
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

export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params
    const teacherToUpdate = await Teacher.findById(id)
    console.log(teacherToUpdate)
    console.log(req.currentUser._id)
    if (!teacherToUpdate.owner.equals(req.currentUser._id)) throw new Error('Well you don\'t own them.....naughty')
    Object.assign(teacherToUpdate, req.body)
    await teacherToUpdate.save()
    return res.status(200).json(teacherToUpdate)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}