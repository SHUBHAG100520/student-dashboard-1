import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');  // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div style={{ width: 250, height: '100vh', backgroundColor: '#f5f5f5', padding: '1rem' }}>
      <h2>Dashboard</h2>
      <Divider />

      <List>
        <ListItem button component={Link} to="/students">
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>

        <ListItem button onClick={handleLogout}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
