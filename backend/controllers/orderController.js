import asyncHandler from '../middleware/asyncHandler'
import Order from '../models/orderModel.js'

// @desc    Create new order
// @route   POST/api/orders
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Order created')
})

// @desc    Get logged in user orders
// @route   GET/api/orders/myorders
// @access  Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get My orders')
})
// @desc    Get order by ID
// @route   GET/api/orders/:id
// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  res.send('get order by id')
})

// @desc    Update order to paid
// @route   PUT/api/orders/:id/pay
// @access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid')
})

export { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid }
