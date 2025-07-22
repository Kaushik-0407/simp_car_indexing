import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { qualityIndexData } from '../../utils/mockData';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const DashboardPage: React.FC = () => {
  const xLabels = qualityIndexData.map(item => item.label);

  const series = qualityIndexData.map((item, index) => ({
    data: qualityIndexData.map((_, i) => (i === index ? item.value : null)),
    label: item.label,
    color: item.color,
  }));

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          mb: 4,
        }}
      >
        <DirectionsCarIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Car Indexing Dashboard
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Real-time metrics on quality indexing of vehicles.
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom>
          Quality Index Overview
        </Typography>
        <BarChart
          xAxis={[{ scaleType: 'band', data: xLabels }]}
          series={series}
          height={400}
          sx={{ width: '100%' }}
        />
      </Box>
    </Container>
  );
};

export default DashboardPage;