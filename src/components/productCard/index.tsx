import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 200, // Consistent height for all images
          width: '100%', // Ensures it fills horizontally
          objectFit: 'contain', // Keeps aspect ratio, doesn't crop
          backgroundColor: '#f5f5f5' // Optional: for transparent images
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${product.price.toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
