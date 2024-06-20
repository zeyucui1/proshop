import React, { useState } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import ConfirmModal from '../../components/ConfirmModal'
import Paginate from '../../components/Paginate'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from '../../slices/productsApiSlice'

const ProductListPage = () => {
  const { pageNumber } = useParams()

  const { data, isLoading, error, refetch } = useGetProductsQuery({
    pageNumber,
  })

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation()

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation()

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [confirmModalInfo, setConfirmModalInfo] = useState({
    id: null,
    action: null,
    title: '',
    body: '',
  })

  const handleCloseConfirmModal = () => setShowConfirmModal(false)

  const handleShowConfirmModal = (id, action, title, body) => {
    setConfirmModalInfo({ id, action, title, body })
    setShowConfirmModal(true)
  }

  const handleConfirmAction = async () => {
    const { id, action } = confirmModalInfo
    try {
      await action(id)
      refetch()
      toast.success('A new Product create successfully!')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    } finally {
      handleCloseConfirmModal()
    }
  }

  const deleteHandler = (id) => {
    handleShowConfirmModal(
      id,
      deleteProduct,
      'Confirm Deletion',
      'Are you sure you want to delete this product?'
    )
  }

  const createProductHandler = () => {
    handleShowConfirmModal(
      null,
      createProduct,
      'Confirm Creation',
      'Are you sure you want to create a new product?'
    )
  }

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createProductHandler}>
            <FaPlus /> Create Product
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data.message}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
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
              {data.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      as={Link}
                      to={`/admin/product/${product._id}/edit`}
                      variant="light"
                      className="btn-sm mx-2"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
      <ConfirmModal
        show={showConfirmModal}
        handleClose={handleCloseConfirmModal}
        handleConfirm={handleConfirmAction}
        title={confirmModalInfo.title}
        body={confirmModalInfo.body}
      />
    </>
  )
}

export default ProductListPage
