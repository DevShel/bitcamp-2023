import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Stream from './stream';
import NavBar from './custom-components/NavBar'
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { load_values } from './stream';



import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function get_percentage(people, square_feet, obstacles){
    if (obstacles = false){
      return (square_feet/36)
    } else
    return (square_feet/)

}


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <p> hi </p>
    ),
  },
  {
    path: "dashboard",
    element: (
    <React.StrictMode>
    {/* Main page container */}
      <Container fluid>
        <Row className="fixed-bottom">
          <Row className ="justify-content-center">
            <NavBar/>
          </Row>
        </Row>
      </Container>
    </React.StrictMode>
    ),
  },
  {
    path: "stream",
    element: (
    <React.StrictMode>
    {/* Main page container */}
      <Container fluid>
        <Row className="fixed-top">
          <Row className ="justify-content-center">
              <Stream/>
            </Row>
        </Row>
        
      </Container>
    </React.StrictMode>
    ),
  },
  {
    path: "notifications",
    element: (
    <React.StrictMode>
      {/* Main page container */}
        <Container fluid>
          <Row className="fixed-bottom">
            <Row className ="justify-content-center">
              <NavBar/>
            </Row>
          </Row>
        </Container>
    </React.StrictMode>
    ),
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={(router)} />
);



