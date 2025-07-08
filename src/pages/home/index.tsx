import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { qualityIndexData } from '../../utils/mockData';
import QualityIndex from '../../components/qualityIndex';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our App
        </Typography>
        <QualityIndex data={qualityIndexData} />
      </Box>
    </Container>
  );
};

export default HomePage;