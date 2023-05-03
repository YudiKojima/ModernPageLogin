import React from 'react'

import './styles.css'

function Button({ type, onClick}) {
  return (
    <div className="container-button">
      <button type={type} onClick={onClick}>Sign in</button>
    </div>
  )
}

export default Button