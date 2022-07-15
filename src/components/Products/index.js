import React from 'react'
import './styles.scss'

const Products = ({ products }) => {
  return (
    <div className="products">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{product.date}</td>
              <td>{product.name}</td>
              <td>{product.amount} шт.</td>
              <td>{product.distance} км.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
