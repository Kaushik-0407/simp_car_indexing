import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Chip, Divider, Alert } from '@mui/material';
import { useProducts } from '../hook/useProducts';
import QualityIndexChart from '../../../components/qualityIndex';
import type { Product } from '../../../types';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const product:Product | undefined = getProductById(id || '');

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Alert severity="info">Loading...</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: '100%',
              height: 300, 
              objectFit: 'contain', 
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: '#f5f5f5' 
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            ${product.price.toLocaleString()}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="h6" gutterBottom>
            Features:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {product.features.map((feature) => (
              <Chip key={feature} label={feature} color="primary" />
            ))}
          </Box>
          
          <Box sx={{ mt: 4, p: 3 }}>
            <QualityIndexChart value={product.qualityIndex}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;