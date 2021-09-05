import { Schema, model } from 'mongoose'

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  important: Boolean,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true,
  versionKey: false
})

noteSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

const Note = model('Note', noteSchema)

export default Note
