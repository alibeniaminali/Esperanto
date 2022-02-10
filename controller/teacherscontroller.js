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
    if (!teacherToUpdate.owner.equals(req.currentUser._id)) throw new Error('Well you don\'t own them.....naughty')
    Object.assign(teacherToUpdate, req.body)
    await teacherToUpdate.save()
    return res.status(202).json(teacherToUpdate)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params
    const teacherToDelete = await Teacher.findById(id)
    if (!teacherToDelete.owner.equals(req.currentUser._id)) throw new Error('Well you don\'t own them.....naughty')
    await teacherToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}

export const addReview = async (req, res) => {
  try {
    const { id } = req.params
    const teacher = await Teacher.findById(id)
    if (!teacher) throw new Error('Teacher not found')

    const newReview = { ...req.body, owner: req.currentUser._id }
    teacher.reviews.unshift(newReview)
    await teacher.save()
    return res.status(201).json(teacher)

  } catch (err) {
    return res.status(422).json({ message: err.message })
  }
}

export const deleteReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params
    const teacher = await Teacher.findById(id)
    if (!teacher) throw new Error('Teacher not found')
    const reviewToDelete = teacher.reviews.id(reviewId)
    if (!reviewToDelete) throw new Error('Review not found')
    if (!reviewToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorised')
    await reviewToDelete.remove()
    await teacher.save()
    return res.sendStatus(204)
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}