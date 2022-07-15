import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { getPageCount, getPagesArray } from './utils/pages'
import Products from './components/Products'
import Sort from './components/Sort'
import Pogination from './components/Pogination'

function App() {
  const [products, setProducts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(8)
  const [page, setPage] = useState(1)

  const pagesArray = getPagesArray(totalPage)

  async function getProducts() {
    const response = await axios.get('http://localhost:8000/products', {
      params: {
        _limit: limit,
        _page: page,
      },
    })
    setProducts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  }

  useEffect(() => {
    getProducts()
  }, [page])

  const sortProducts = (sort) => {
    setSelectedSort(sort)
    setProducts([...products].sort((a, b) => a[sort] - b[sort]))
    setProducts([...products].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const onChangePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <Sort
            value={selectedSort}
            onChange={sortProducts}
            defaultValue="Сортировка по:"
            options={[
              { value: 'name', name: 'По названию' },
              { value: 'amount', name: 'По количеству' },
              { value: 'distance', name: 'По расстоянию' },
            ]}
          />
        </div>
        <Products products={products} />
        <Pogination onChangePage={onChangePage} pagesArray={pagesArray} />
        <p>стр. {page}</p>
      </div>
    </div>
  )
}

export default App
