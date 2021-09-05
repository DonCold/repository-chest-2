import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
}, {
  timestamps: true,
  versionKey: false
})

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.password
  }
})

const User = model('User', userSchema)

export default User
