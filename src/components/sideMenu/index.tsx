import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ open, onClose, onLogout }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
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
    </Drawer>
  );
};

export default SideMenu;