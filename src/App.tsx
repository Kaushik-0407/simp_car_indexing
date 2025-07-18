import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import type { NavItem } from './types';
import Header from './components/header';
import SideMenu from './components/sideMenu';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/productDetails';
import DashboardPage from './pages/dashboard';
import LayoutWrapper from './components/layout';


const navItems: NavItem[] = [
  { label: 'Home', path: '/home' },
  { label: 'Products', path: '/products' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'User Profile', path: '/user-profile' },
];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>       
        <Routes>
          <Route path="/" element={<LayoutWrapper/>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          {/* <Route path="/contact-us" element={<ContactUsPage />} /> */}
          {/* <Route path="/about-us" element={<AboutUsPage />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/user-profile" element={<UserProfilePage />} /> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;