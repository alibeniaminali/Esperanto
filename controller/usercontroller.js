import User from '../models/usermodel.js'

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).populate('ownedTeacher')
    if (!user) throw new Error('User not found')
    return res.status(200).json(user)
    
  } catch (err) {
    return res.status(204).json({ message: err.message })
  }
}

