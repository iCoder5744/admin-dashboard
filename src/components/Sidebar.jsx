import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdNotificationsNone, MdOutlineDashboard } from "react-icons/md";
import { FaBars, FaTimes, FaAngleRight } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiUser } from "react-icons/fi";
import { TbBrandProducthunt } from 'react-icons/tb';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiTwotoneMessage } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const menuItems = [
  { label: "Dashboard", icon: <MdOutlineDashboard />, path: "/" },
  { 
    label: "Products", 
    icon: <TbBrandProducthunt />, 
    submenu: [
      { label: "Products List", path: "/products/list" },
      { label: "Product View", path: "/products/view" },
      { label: "Product Upload", path: "/products/upload" }
    ]
  },
  { label: "Orders", icon: <HiOutlineShoppingCart />, path: "/orders" },
  { label: "Notifications", icon: <MdNotificationsNone />, path: "/notifications" },
  { label: "Login", icon: <FiUser />, path: "/login" },
  { label: "Sign Up", icon: <FiUser />, path: "/signup" },
  { label: "Forget Password", icon: <RiLockPasswordLine />, path: "/forget-password" },
  { label: "OTP", icon: <AiTwotoneMessage />, path: "/otp" },
  { label: "Settings", icon: <IoSettingsOutline />, path: "/settings" }
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  return (
    <>
      {/* Toggle Button */}
      <button className='fixed top-1 left-4 z[110] text-black lg-hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar fixed top-0 left-0 z-[100] h-screen bg-white shadow-md transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[200px]'} lg:translate-x-0 w-[200px] overflow-y-auto`}
      >
        {/* Logo */}
        <Link to="/" className="logoWrapper px-3 py-2  flex items-center text-center" onClick={() => setIsSidebarOpen(false)}>
          <img src={Logo} className="w-100 p-[5px] " alt="Logo" />
        </Link>

        {/* Sidebar Menu */}
        <div className="sidebarTabs px-2 mt-4">
          <ul className="flex flex-col gap-3">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path || (item.submenu && item.submenu.some(sub => sub.path === location.pathname));
              
              return (
                <li key={index} className={`${openSubmenu === index ? 'colapse' : ''}`}>
                  {item.submenu ? (
                    <>
                      <Button 
                        className={`w-100 flex items-center ${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`} 
                        onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                      >
                        <span className={`icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md ${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                          {item.icon}
                        </span>
                        <span className={`${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                          {item.label}
                        </span>
                        <span className={`arrow ml-auto w-[30px] h-[30px] flex items-center justify-center transition-transform duration-300 ${openSubmenu === index ? 'rotate-90' : ''}`}>
                          <FaAngleRight />
                        </span>
                      </Button>
                      <div className={`submenu ${openSubmenu === index ? 'colapse' : 'hidden'}`}>
                        {item.submenu.map((sub, subIndex) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link key={subIndex} to={sub.path} onClick={() => setIsSidebarOpen(false)}>
                              <button className={`w-full text-left px-3 py-1 ${isSubActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                                - {sub.label}
                              </button>
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <Link to={item.path} onClick={() => setIsSidebarOpen(false)} className={`w-100 flex items-center ${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                      <Button className={`w-100 flex items-center ${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                        <span className={`icon w-[30px] h-[30px] px-1 flex items-center justify-center rounded-md ${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                          {item.icon}
                        </span>
                        <span className={`${isActive ? 'text-[#3872fa]' : 'text-[#5e5d72]'}`}>
                          {item.label}
                        </span>
                      </Button>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && <div className='fixed inset-0 bg-black bg-opacity-50 border4  z-[90] lg:hidden' onClick={() => setIsSidebarOpen(false)} />}
    </>
  );
};

export default Sidebar;
