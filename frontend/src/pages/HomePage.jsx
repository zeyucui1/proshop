import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Product from '../components/ProductItem'
import Loader from '../components/Loader'
import Message from '../components/Message'
const HomePage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default HomePage
