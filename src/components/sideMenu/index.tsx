import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import type { NavItem } from '../../types';

interface SideMenuProps {
  open: boolean;
  isMobile: boolean;
  onClose: () => void;
  onLogout: () => void;
  navItems: NavItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Home: <HomeIcon />,
  Products: <ShoppingCartIcon />,
  'Contact Us': <ContactMailIcon />,
  'About Us': <InfoIcon />,
  Dashboard: <DashboardIcon />,
  'User Profile': <PersonIcon />,
};

const SideMenu: React.FC<SideMenuProps> = ({ open, onClose, onLogout, isMobile, navItems }) => {
  const navigate = useNavigate();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>

        {isMobile &&
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>{iconMap[item.label] || <HomeIcon />}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        }

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
