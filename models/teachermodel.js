import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const { Schema } = mongoose

const reviewSchema = new Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const teacherSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 20 },
  lastName: { type: String, required: true, maxlength: 20 },
  location: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pricePerHour: { type: Number, required: true },
  teaches: { type: String, required: true },
  alsoSpeaks: [{ type: String }],
  aboutMe: { type: String, maxlength: 500, required: true },
  displayPicture: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  reviews: [reviewSchema],
})

teacherSchema.virtual('avgRating')
  .get(function () {
    if (!this.reviews.length) return 'Not rated yet'

    const sum = this.reviews.reduce((acc, review) => {
      return acc + review.rating
    }, 0)

    return (sum / this.reviews.length).toFixed(2)
  })

teacherSchema.set('toJSON', {
  virtuals: true,
})

teacherSchema.plugin(uniqueValidator)

export default mongoose.model('Teacher', teacherSchema)