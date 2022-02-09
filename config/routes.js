import express from 'express'

import teacherModel from '../models/teacherModel.js'

const router = express.Router()

router.route('/teachers')
  .get()