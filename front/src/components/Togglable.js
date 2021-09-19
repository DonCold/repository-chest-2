import { useState, forwardRef, useImperativeHandle } from 'react'

const Togglable = forwardRef(({ children, showLabel = 'show', hiddenLabel = 'hidden'}, ref) => {
  const [visible, setVisible] = useState(false);

  const hiddenStyle = { display: visible ? 'none' : '' };
  const shownStyle = { display: visible ? '' : 'none' };

  const toggleVisibility = () => setVisible(!visible);

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

export default Togglable;
