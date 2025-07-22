import React from 'react';
import { Box, Typography } from '@mui/material';

const qualityRanges = [
  { label: 'Poor', color: '#d32f2f', min: 1, max: 2 },
  { color: '#f57c00', min: 2, max: 3 },
  { color: '#fbc02d', min: 3, max: 4 },
  { color: '#fff176', min: 4, max: 5 },
  { color: '#cddc39', min: 6, max: 7 },
  { color: '#8bc34a', min: 7, max: 8 },
  { label: 'Good', color: '#388e3c', min: 9, max: 10 }
];


const QualityIndexChart = ({ value = 6.5 }) => {
  const totalBlocks = qualityRanges.length;

const valueIndex = qualityRanges.findIndex((range, index) =>
  value >= range.min && (value < range.max || (index === qualityRanges.length - 1 && value === range.max))
);



  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        p: 2,
        maxWidth: 500,
        mx: 'auto',
        textAlign: 'center',
        boxShadow: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          Quality Index
        </Typography>

        <Typography variant="subtitle1" fontWeight={600}>
          {value}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          height: 40, 
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: `${Math.min(Math.max((valueIndex + 0.5) * (100 / totalBlocks), 0), 100)}%`,
            transform: 'translateX(-50%)',
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >

          <Box sx={{ fontWeight: 700, mb: '2px' }}>{value}</Box>

          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '12px solid black',
            }}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        {qualityRanges.map((range, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: 20,
              backgroundColor: range.color,
              borderTopLeftRadius: index === 0 ? 4 : 0,
              borderBottomLeftRadius: index === 0 ? 4 : 0,
              borderTopRightRadius: index === totalBlocks - 1 ? 4 : 0,
              borderBottomRightRadius: index === totalBlocks - 1 ? 4 : 0,
              mx: 0.2
            }}
          />
        ))}
      </Box>

      {/* Labels */}
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="body2">Poor</Typography>
        <Typography variant="body2">Good</Typography>
      </Box>
    </Box>
  );
};

export default QualityIndexChart;
