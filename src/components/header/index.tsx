import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import type { NavItem } from '../../types';
import { useNavigate } from 'react-router';


interface HeaderProps {
  navItems: NavItem[];
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ navItems, onMenuClick}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI App
        </Typography>
        <Box sx={{ display: isMobile ? 'none' : 'flex' }}>
          {navItems.map((item) => (
            <Button key={item.path} color="inherit" onClick={()=>navigate(item.path)}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;