import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { FaTrash, FaEdit } from 'react-icons/fa'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import ConfirmModal from '../../components/ConfirmModal'
import { toast } from 'react-toastify'
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from '../../slices/productsApiSlice'

const ProductListPage = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery()
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation()
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation()

  const [showModal, setShowModal] = useState(false)
  const [modalAction, setModalAction] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null)

  const handleDelete = (id) => {
    setSelectedProductId(id)
    setModalAction('delete')
    setShowModal(true)
  }

  const handleCreate = () => {
    setModalAction('create')
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleConfirm = async () => {
    if (modalAction === 'delete') {
      try {
        await deleteProduct(selectedProductId).unwrap()
        refetch()
        toast.success('Product deleted successfully')
      } catch (error) {
        toast.error(error?.data?.message || error.message)
      }
    } else if (modalAction === 'create') {
      try {
        await createProduct().unwrap()
        refetch()
        toast.success('Product created successfully')
      } catch (error) {
        toast.error(error?.data?.message || error.message)
      }
    }
    setShowModal(false)
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={handleCreate}>
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    <FaTrash style={{ color: 'white' }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <ConfirmModal
        show={showModal}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title={
          modalAction === 'delete' ? 'Confirm Deletion' : 'Confirm Creation'
        }
        body={
          modalAction === 'delete'
            ? 'Are you sure you want to delete this product?'
            : 'Are you sure you want to create a new product?'
        }
      />
    </>
  )
}

export default ProductListPage
