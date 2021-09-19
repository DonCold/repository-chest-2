import { useState } from 'react'

const Togglable = ({ children, showLabel = 'show', hiddenLabel = 'hidden'}) => {
  const [visible, setVisible] = useState(false);

  const hiddenStyle = { display: visible ? 'none' : '' };
  const shownStyle = { display: visible ? '' : 'none' };

  return (
    <div>
      <div style={hiddenStyle}>
        <button onClick={() => setVisible(true)}>{ showLabel }</button>
      </div>
      <div style={shownStyle}>
        { children }
        <button onClick={() => setVisible(false)}>{ hiddenLabel }</button>
      </div>
    </div>
  )
}

export default Togglable;
