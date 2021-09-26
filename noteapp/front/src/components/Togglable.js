import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Togglable = forwardRef(({ children, showLabel = 'show', hiddenLabel = 'hidden' }, ref) => {
  const [visible, setVisible] = useState(false)

  const hiddenStyle = { display: visible ? 'none' : '' }
  const shownStyle = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hiddenStyle}>
        <button onClick={toggleVisibility}>{ showLabel }</button>
      </div>
      <div style={shownStyle}>
        { children }
        <button onClick={toggleVisibility}>{ hiddenLabel }</button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'
Togglable.propTypes = {
  showLabel: PropTypes.string
}

export default Togglable
