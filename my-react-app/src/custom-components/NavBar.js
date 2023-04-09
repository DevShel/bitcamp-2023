import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import {
  createBrowserRouter,
  RouterProvider, Navigate, useNavigation,
  Route,
  Link,
} from "react-router-dom";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/dashboard" label="Dashboard" icon={<EqualizerIcon />} />
        <BottomNavigationAction component={Link} to="/stream" label="Stream" icon={<VideoCameraFrontIcon />} />
        <BottomNavigationAction component={Link} to="/notifications" label="Notifications" icon={<NotificationsIcon />} />
      </BottomNavigation>
  );
}
