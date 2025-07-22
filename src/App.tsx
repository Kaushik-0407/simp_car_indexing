import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/productDetails';
import DashboardPage from './pages/dashboard';
import LayoutWrapper from './components/layout';
import ContactUsPage from './pages/contact_us';
import AboutUsPage from './pages/about_us';
import UserProfilePage from './pages/user/userProfile';

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
          <Route path="/contact-us" element={<ContactUsPage />} /> 
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;