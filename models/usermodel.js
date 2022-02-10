import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

const { Schema } = mongoose
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, maxlength: 25 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema.virtual('ownedTeacher', {
  ref: 'Teacher',
  localField: '_id',
  foreignField: 'owner',
})

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    return json
  },
})

userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Password doesn\'t match.....')
    }
    next()
  })

userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

userSchema.plugin(uniqueValidator)

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}


export default mongoose.model('User', userSchema)