import React from 'react'

import './styles.css'

function 
Input({ label, type, value, placeholder, onChange}) {
  return (
    <div className='container-input'>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input