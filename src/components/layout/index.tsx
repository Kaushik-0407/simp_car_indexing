import React, { useEffect, useState } from 'react'
import Header from '../header'
import SideMenu from '../sideMenu';
import type { NavItem } from '../../types';
import Layout from './outlet';
import { useNavigate } from 'react-router';
import { useMediaQuery, useTheme } from '@mui/material';

const LayoutWrapper = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const handleMenuClick = () => {
      setSideMenuOpen(true);
    };
  
    const handleSideMenuClose = () => {
      setSideMenuOpen(false);
    };
  
    const handleLogout = () => {
      console.log('Logout clicked');
      setSideMenuOpen(false);
      // Add actual logout logic here
    };
    const navItems: NavItem[] = [
        { label: 'Home', path: '/home' },
        { label: 'Products', path: '/products' },
        { label: 'Contact Us', path: '/contact-us' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'User Profile', path: '/user-profile' },
      ];
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
         <Header navItems={navItems} onMenuClick={handleMenuClick} />
        <SideMenu
          open={sideMenuOpen}
          onClose={handleSideMenuClose}
          onLogout={handleLogout}
          isMobile ={isMobile}
          navItems ={navItems}
        /> 
        <Layout/>
    </React.Fragment>
  )
}

export default LayoutWrapper