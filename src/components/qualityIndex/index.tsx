import React from 'react';
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';
import type { QualityIndexData } from '../../types';


interface QualityIndexProps {
  data: QualityIndexData[];
}

const QualityIndex: React.FC<QualityIndexProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h6" gutterBottom>
        Quality Index
      </Typography>
      {data.map((item) => (
        <Box key={item.label} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1">{item.label}</Typography>
            <Typography variant="body1">{item.value}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: theme.palette.grey[300],
              '& .MuiLinearProgress-bar': {
                backgroundColor: item.color,
                borderRadius: 5,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default QualityIndex;