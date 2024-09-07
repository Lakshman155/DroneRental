import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import img from './logo.webp';
import { Typography } from '@mui/material';

const pages = ['Products', 'Pricing', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div>
      <nav className="bg-blue-200 border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-8 w-auto" src={img} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {pages.map((page) => (
                <Link key={page} to={`/${page.toLowerCase()}`} className="text-gray-700 hover:text-gray-900">
               
                  <Typography>
                  {page}
                  </Typography>
                </Link>
              ))}
              <button onClick={() => setOpen(true)} className="text-gray-700 hover:text-gray-900">
                Login
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={handleOpenNavMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
               
              </button>
            </div>
            <div className="relative">
              <button onClick={handleOpenUserMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
               m
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-50">
                  {settings.map((setting) => (
                    <button key={setting} onClick={() => setIsUserMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      {setting}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {pages.map((page) => (
                  <Link key={page} to={`/${page.toLowerCase()}`} className="text-gray-700 hover:text-gray-900 block">
                    {page}
                  </Link>
                ))}
                <button onClick={() => setOpen(true)} className="text-gray-700 hover:text-gray-900 block">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Login open={open} setOpen={setOpen} />
    </div>
  );
}

export default Navbar;
