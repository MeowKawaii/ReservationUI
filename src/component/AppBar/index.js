import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './styles.css';

export default function SimpleAppBar() {
  return (
    <div className="root">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6">
            Booking Meeting Room
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}