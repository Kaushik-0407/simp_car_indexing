import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import QualityIndex from '../../components/qualityIndex';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }} >
        <Box display="flex" justifyContent="center" sx={{mb: 2}}>
        <Typography variant="h4" component="h1" gutterBottom sx={{justifyContent: 'flex-center'}}>
          Welcome To Simp Car Indexing System
        </Typography>
        </Box>
        <QualityIndex value={6.5} />
      </Box>
    </Container>
  );
};

export default HomePage;