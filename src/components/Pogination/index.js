import React from 'react'
import './styles.scss'

const Pogination = ({pagesArray, onChangePage}) => {
  return (
    <div className='pogination'>
         {pagesArray.map((page) => (
          <button onClick={() => onChangePage(page)}
            key={page}>
            {page}
          </button>
        ))}
    </div>
  )
}

export default Pogination