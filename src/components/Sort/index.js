import React from 'react'
import './styles.scss'

const Sort = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className="sort">
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Sort
