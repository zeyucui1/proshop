import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/ProductItem'
import { useEffect, useState } from 'react'
import axios from 'axios'
const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h1>Lastest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
