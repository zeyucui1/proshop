import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/ProductItem'
import products from '../products'
const HomePage = () => {
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
