import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, CircularProgress, Box } from '@mui/material';
import LayoutWrapper from './components/layout';

const HomePage = lazy(() => import('./pages/home'));
const ProductsPage = lazy(() => import('./pages/products'));
const ProductDetailsPage = lazy(() => import('./pages/products/productDetails'));
const DashboardPage = lazy(() => import('./pages/dashboard'));
const ContactUsPage = lazy(() => import('./pages/contact_us'));
const AboutUsPage = lazy(() => import('./pages/about_us'));
const UserProfilePage = lazy(() => import('./pages/user/userProfile'));

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

const Loader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LayoutWrapper />}>
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
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
