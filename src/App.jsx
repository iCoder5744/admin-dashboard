import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductsList from "./pages/products/ProductsList"; 
import ProductView from "./pages/products/ProductView"; 
import ProductUpload from "./pages/products/ProductUpload";

const MyContext = createContext();

function App() {
  const values = {};

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <section className='main flex'>
          {/* Sidebar */}
          <div className="sidebarWrapper w-[15%] border-r-2 bg-white shadow-md">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="content-Right w-[85%] px-2">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/products/list' element={<ProductsList />} />
              <Route path='/products/view' element={<ProductView />} />
              <Route path='/products/upload' element={<ProductUpload />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </section>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
