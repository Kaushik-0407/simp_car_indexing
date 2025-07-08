import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { qualityIndexData } from '../../utils/mockData';

const DashboardPage: React.FC = () => {
  const chartData = {
    xAxis: [{ scaleType: 'band', data: qualityIndexData.map(item => item.label) }],
    series: [{ data: qualityIndexData.map(item => item.value) }],
    colors: qualityIndexData.map(item => item.color),
    height: 400,
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom>
          Quality Index Overview
        </Typography>
        <BarChart
          xAxis={chartData.xAxis}
          series={chartData.series}
          colors={chartData.colors}
          height={chartData.height}
        />
      </Box>
    </Container>
  );
};

export default DashboardPage;