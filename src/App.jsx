import React from 'react'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserList from './components/pages/home/userList/UserList'
import User from './components/pages/home/user/User'
import NewUser from './components/pages/home/newUser/NewUser'
import Products from './components/pages/products/Products'
import Product from './components/pages/product/Product'


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
      <Sidebar />
      <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/users' element={<UserList />}></Route>
          <Route path='/user:userId' element={<User />}></Route>
          <Route path='/newUser' element={<NewUser />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/product/:productId' element={<Product />}></Route>
          <Route path='/newProduct' element={<Products />}></Route>
      </Routes>

      </div>
    </Router>
  );
}

export default App;
