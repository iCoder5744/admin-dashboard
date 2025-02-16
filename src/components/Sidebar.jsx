import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdNotificationsNone, MdOutlineDashboard } from "react-icons/md";
import { FaAngleRight } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiUser } from "react-icons/fi";
import { TbBrandProducthunt } from 'react-icons/tb';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiTwotoneMessage } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isToggleSubmenu, setIstToggleSubmenu] = useState(false);
  

  const isOpenSubmenu = (index) => {
    if (activeTab === index) {
      setIstToggleSubmenu(!isToggleSubmenu);
    } else {
      setActiveTab(index);
      setIstToggleSubmenu(true);
    }
  };

  return (
    <div className='sidebar fixed top-0 left-0 z-[100] w-[15%] h-screen bg-white shadow-lg'>
    <Link to="/">
      <div className="logoWrapper px-4 py-3">
        <img src={Logo} className='w-100' alt="Logo" />
      </div>
    </Link>

    <div className="sidebarTabs px-2 mt-4">
      <ul className='flex flex-col gap-3'>

        <li>
          <Link to="/" className='no-underline'>
            <Button className={`w-100 no-underline ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
              <span className='icon no-underline w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md'>
                <MdOutlineDashboard />
              </span>
              Dashboard
            </Button>
          </Link>
        </li>

        <li className={activeTab === 1 && isToggleSubmenu ? 'colapse' : ''}>
          <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
            <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md'>
              <TbBrandProducthunt />
            </span>
            Products
            <span className={`arrow ml-auto w-[30px] h-[30px] flex items-center justify-center transition-transform duration-300 ${activeTab === 1 && isToggleSubmenu ? 'rotate-90' : ''}`}>
              <FaAngleRight />
            </span>
          </Button>

          <div className={`submenu  ${activeTab === 1 && isToggleSubmenu ? 'colapse' : ''}`}>
            <Link to="/products/list"><button className="w-full">- Products List</button></Link>
            <Link to="/products/view"><button className="w-full">- Product View</button></Link>
            <Link to="/products/upload"><button className="w-full">- Product Upload</button></Link>
          </div>
        </li>

        <li>
          <Link to="/orders" className='no-underline'>
            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md'>
                <HiOutlineShoppingCart />
              </span>
              Orders
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/notifications" className='no-underline'>
            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md'>
                <MdNotificationsNone />
              </span>
              Notifications
            </Button>
          </Link>
        </li>

          <li>
            <h6 className='text-black-50  capitalize px-3 mt-4'>Authentication</h6>
          </li>

          <li>
            <Link to='/login' className='no-underline'>
            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md '>
                <FiUser />
              </span>
              Login
            </Button>
            </Link>
          </li>

          <li>
           <Link to='/signup' className='no-underline'>
           <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md '>
                <FiUser />
              </span>
              Sign Up
            </Button>
           </Link>
          </li>

          <li>
            <Link to='/forget-password' className='no-underline'>
            <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md '>
                <RiLockPasswordLine />
              </span>
              Forget Password
            </Button>
            </Link>
          </li>

          <li>
            <Link to='/otp' className='no-underline'>
            <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md '>
                <AiTwotoneMessage />
              </span>
               OTP
            </Button>
            </Link>
          </li>

          <li>
            <Link to='/settings' >
            <Button className={`w-100 no-underline ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
              <span className='icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md '>
                <IoSettingsOutline />
              </span>
              Settings
            </Button> 
            </Link>
          </li>        

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
