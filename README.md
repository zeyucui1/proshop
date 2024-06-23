<div align="center">
  <h3 align="center">E-commerce Proshop</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Live Demo](#live-demo)
6. 🚀 [Screenshot](#screenshot)

## <a name="introduction">🤖 Introduction</a>

E-commerce Proshop is an e-commerce website built to sell electronics, demonstrating my skills as a developer. Inspired by e-commerce websites like JB-Hifi, it aims to provide a similar shopping experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

**FrontEnd:**

- React
- React Bootstrap (CSS)
- State Management: Redux & Redux Toolkit
- Useful Tools: Redux-Helmet (Dynamic Page Title), toast

**Server-side:**

- Node.js
- Express + Express Async Handler + Nodemon
- Databases Interaction: Mongoose
- Server-Side Scripting: JSONWebToken and bcryptjs
- Postman (API testing)

**Databases:**

- MongoDB

**Deployment:**

- Render

**Version Control:**

- Git and GitHub

## <a name="features">🔋 Features</a>

**As User:**

- Browsing through the website and seeing different types of products.
- Creating an account with encrypted information saved in the database.
- Keeping track of their orders.
- Maintaining a Cart List with saved data in the database.
- Leaving reviews and ratings for products.
- Updating user information in their account.
- Purchasing items using credit card or PayPal.
  - **PayPal Sandbox Account:**
    - Account: sb-bs5ux31187078@business.example.com
    - Password: +Zy$9g{G

**As Admin:**

- All user privileges plus:
- Admin Page to control products, orders, and users.
- Creating new products visually in the manage product page.
- Updating product information like name, price, image, and description.
- Managing orders in the order list page.
- Managing users and setting admin status in the user list page.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/your-username/your-project.git
```

### cd your-project
Install the project dependencies using npm:
```bash
npm install
```
### Set Up Environment Variables
Create a new file named .env in the root of your project and add the following content:

```bash
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://loading1261:Qh9uG6PA3zLhJA2o@cluster0.qbmedt8.mongodb.net/proshop?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=abc123
PAYPAL_CLIENT_ID=ASceZCYi-_LgrJ_9y2Vzcv5AHaOXfem6_HHs6nsIm1vnhZDQV5sqZzvxp9cSCbiLF0QjutYEtK-RrK1q
PAGINATION_LIMIT=8
```

Replace the placeholder values with your actual credentials.

### Running the Project
npm start
Open http://localhost:3000 in your browser to view the project.

## <a name="live-demo">🔗 Live Demo</a>

You can access the live demo [here](https://proshop-bu4u.onrender.com).

**Login Information:**

- User: test@email.com | Password: 123456
- Admin: admin@email.com | Password: 123456

## <a name="screenshot">🚀 Screenshot</a>

### Homepage:

![Homepage](./frontend/public/screenshot/proshop_home.png)

### Product Page:

![Product Page](./frontend/public/screenshot/product.png)

### Search Page:

![Search Page](./frontend/public/screenshot/search.png)

### Cart Page:

![Cart Page](./frontend/public/screenshot/cart.png)

### Shipping Page:

![Shipping Page](./frontend/public/screenshot/shipping.png)

### PlaceOrder Page:

![PlaceOrder Page](./frontend/public/screenshot/placeorder.png)

### Order Page:

![Order Page](./frontend/public/screenshot/order.png)

### SignIn Page:

![SignIn Page](./frontend/public/screenshot/signin.png)

### Register Page:

![Register Page](./frontend/public/screenshot/register.png)

### ProductList Page (for admin user only):

![ProductList Page](./frontend/public/screenshot/productlist.png)
![ProductList Page](./frontend/public/screenshot/productlist1.png)

### UserList Page (for admin user only):

![UserList Page](./frontend/public/screenshot/userlist.png)
![UserList Page](./frontend/public/screenshot/userlist1.png)

### OrderList Page (for admin user only):

![OrderList Page](./frontend/public/screenshot/orderlist.png)

```

```
