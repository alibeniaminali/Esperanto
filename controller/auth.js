import User from '../models/usermodel.js'
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res) => {
  try {
    await User.create(req.body)
    return res.status(202).json({ message: 'Registration successful, Welcome!' })
  } catch (error) {
    return res.status(422).json({ message: 'dafuuuq' })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const userToLogin = await User.findOne({ email: email })
    if (!userToLogin || !userToLogin.validatePassword(password)) {
      return res.status(401).json({ message: 'Yikes, unauthorised' })
    }
    const token = jwt.sign({ sub: userToLogin._id }, process.env.secret, { expiresIn: '7 days' })
    return res.status(200).json({ message: `Welcome ${userToLogin.username}`, token: token })
  } catch (error) {
    return res.status(401).json({ message: 'Yikes, unauthorised' })
  }
}