import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './custom-components/NavBar'
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';


function Stream() {
  return (
    <Container fluid>
          {/*  Main video streaming row */}
          <Row className ="justify-content-center">
            <Col xs={6} sm={6} lg={5} xl={4} className="bg-black mt-5">
              <Container fluid class>
                 <img className="img-fluid" src="https://i.ytimg.com/vi/qOv8K-AJ7o0/hqdefault.jpg"></img>

              </Container>
            </Col>
          </Row>

       

          {/*  Text Row */}
          <Row className ="justify-content-center">
            <Col xs={6} sm={8} md={10} className="justify-content-start">
              <Row className="mt-3 pb-3 fs-4 border-bottom border-5">
                <Col>
                  <Button className="fs-4 btn-dark fw-bolder"> Crowd Meter: </Button> 
                </Col>
                <Col className="fs-4 text-start">
                  [Insert]
                </Col>
              </Row>
              <Row className="mt-3 pb-3 fs-5 border-bottom border-5"> 
                <Col>
                  <Button className="fs-4 btn-dark fw-bolder"> Estimated Population: </Button> 
                </Col>
                <Col className="fs-4 text-start">
                  [Insert]
                </Col>
              </Row>
              
              
              <Row className="mt-3 pb-3 fs-5 "> 
                  <Col>
                    <Button className="fs-4 btn-dark fw-bolder"> Room Size (Sq. ft): </Button> 
                  </Col>
                  
                  <Col className="fs-4 text-start">
                    [Insert]
                  </Col>
                  
              </Row>
              <Col className="border-5 border-bottom border-5 pb-2"> 
                    <form>
                      <label className="fs-5">
                        Change Room Size
                        <input type="text" className = "mx-2"/>
                      </label>
                      <Button className = "mt-2 mt-md-0 mx-2 btn-dark mb-2 fw-bolder" type="submit" value="Submit"> Submit </Button>
                    </form>
              </Col>


              <Row className="mt-3 pb-3 fs-5"> 
                 <Col>
                  <Button className="fs-4 btn-dark fw-bolder"> Obstacles Present: </Button> 
                  </Col>
                  <Col className="fs-4 text-start">
                    [Insert]
                 </Col>
              </Row>
              <Col className="border-5 border-bottom border-5 pb-2"> 
                Change Obstacles Present: 
                <Button className="mx-2 btn-light"> Yes </Button>
                <Button className="mx-2 btn-light"> No </Button>
              </Col>
            </Col>
            
          </Row>
          

          <Row className="fixed-bottom">
            <Row className ="justify-content-center">
              <NavBar/>
            </Row>
          </Row>
    </Container>
  );
}

export default Stream;
