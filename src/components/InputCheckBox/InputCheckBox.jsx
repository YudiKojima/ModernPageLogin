import React from 'react'

import './styles.css'

function InputCheckBox() {
  return (
    <div className="container-input-checkbox">
      <input type="checkbox" id='checkbox'/>
      <label htmlFor='checkbox'>Remember me</label>
    </div>
  )
}

export default InputCheckBox