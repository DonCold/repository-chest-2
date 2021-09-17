import mongoose from 'mongoose'

const { NODE_ENV, MONGO_DB_URI, MONGO_DB_URI_TEST } = process.env

const connection = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

mongoose.connect(connection)
  .then((_db) => console.log('Database is connected'))
  .catch((_err) => console.log(_err))

process.on('uncaughtException', () => {
  mongoose.connection.close()
  process.exit(1)
})
