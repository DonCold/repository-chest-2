import { Schema, model } from 'mongoose'

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  important: Boolean
}, {
  timestamps: true,
  versionKey: false
})

const Note = model('Note', noteSchema)

export default Note
