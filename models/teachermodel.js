import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const { Schema } = mongoose


// need to add owner field
const teacherSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 20 },
  lastName: { type: String, required: true, maxlength: 20 },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pricePerHour: { type: Number, required: true },
  teaches: { type: String, required: true },
  alsoSpeaks: [{ type: String }],
  aboutMe: { type: String, maxlength: 500, required: true },
  displayPicture: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})

teacherSchema.plugin(uniqueValidator)

export default mongoose.model('Teacher', teacherSchema)