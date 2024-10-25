// wings-cafe.js
import React, { useState } from 'react';


function WingsCafe() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    quantity: ''
  });
  
  const [transactions, setTransactions] = useState([]);
  const [transactionData, setTransactionData] = useState({ product: '', quantity: '', type: 'add' });
  
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  // Product Management Functions
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, productData]);
    setProductData({ name: '', description: '', category: '', price: '', quantity: '' });
  };

  // Stock Management Functions
  const handleTransactionChange = (e) => {
    setTransactionData({ ...transactionData, [e.target.id]: e.target.value });
  };

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transactionData]);
    setTransactionData({ product: '', quantity: '', type: 'add' });
  };

  // User Management Functions
  const handleUserSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, username]);
    setUsername('');
  };

  return (
    <div className="App">
      <header>
        <h1>Wings Cafe Stock Inventory</h1>
      </header>
      <main>
        <section id="dashboard">
          <h2>Dashboard</h2>
          <div id="stock-levels">Current stock levels will be displayed here.</div>
        </section>

        <section id="product-management">
          <h2>Product Management</h2>
          <form id="add-product-form" onSubmit={handleProductSubmit}>
            <input type="text" id="name" placeholder="Product Name" value={productData.name} onChange={handleChange} required />
            <input type="text" id="description" placeholder="Description" value={productData.description} onChange={handleChange} required />
            <input type="text" id="category" placeholder="Category" value={productData.category} onChange={handleChange} required />
            <input type="number" id="price" placeholder="Price" value={productData.price} onChange={handleChange} required />
            <input type="number" id="quantity" placeholder="Initial Quantity" value={productData.quantity} onChange={handleChange} required />
            <button type="submit">Add Product</button>
          </form>
          <table id="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td><button onClick={() => setProducts(products.filter((_, i) => i !== index))}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="stock-management">
          <h2>Stock Management</h2>
          <form id="stock-transaction-form" onSubmit={handleTransactionSubmit}>
            <select id="product" value={transactionData.product} onChange={handleTransactionChange} required>
              <option value="">Select Product</option>
              {products.map((product, index) => (
                <option key={index} value={product.name}>{product.name}</option>
              ))}
            </select>
            <input type="number" id="quantity" placeholder="Quantity" value={transactionData.quantity} onChange={handleTransactionChange} required />
            <select id="type" value={transactionData.type} onChange={handleTransactionChange}>
              <option value="add">Add Stock</option>
              <option value="deduct">Deduct Stock</option>
            </select>
            <button type="submit">Record Transaction</button>
          </form>
          <table id="transaction-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Transaction Type</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.product}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="user-management">
          <h2>User Management</h2>
          <form id="user-form" onSubmit={handleUserSubmit}>
            <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <button type="submit">Add User</button>
          </form>
          <table id="user-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user}</td>
                  <td><button onClick={() => setUsers(users.filter((_, i) => i !== index))}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default WingsCafe;
