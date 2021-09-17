import jwt from 'jsonwebtoken'

export const Auth = async (req, res, next) => {
  const authorization = req.get('authorization')
  let token = null

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7)
  } else {
    return res.status(401).json({
      error: 'Token is not provided'
    })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) return res.status(401).json({ error: 'token missing or invalid' })

    next()
  } catch (error) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
}
