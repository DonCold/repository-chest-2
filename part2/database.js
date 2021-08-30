import mongoose from 'mongoose'

const connection = 'mongodb://localhost/pruebita'

mongoose.connect(connection)
  .then((_db) => console.log('Database is connected'))
  .catch((_err) => console.log(_err))

process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})
