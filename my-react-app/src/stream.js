import React from 'react';
import { useEffect } from 'react';
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
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, set, onValue, push } from "firebase/database";
import { useState } from 'react';
import Bar from 'react-meter-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJqoYqej8gCGAeIjZv9iKf0EX1vI8k_g",
  authDomain: "bitcamp-2023-92954.firebaseapp.com",
  databaseURL: "https://bitcamp-2023-92954-default-rtdb.firebaseio.com",
  projectId: "bitcamp-2023-92954",
  storageBucket: "bitcamp-2023-92954.appspot.com",
  messagingSenderId: "980584986612",
  appId: "1:980584986612:web:639ed66fdf454d63e92ba1"
};

const app = initializeApp(firebaseConfig);


// Initialize Firebase
const db = getDatabase();

function updateRoomSize(data) {
  set(ref(db, "/room"), {
    size: data
  })
  window.location.reload();
}

function updateRoomType(data) {
  set(ref(db, "/room"), {
    type: data
  })
  window.location.reload();
}

function space_func(data) {
  set(ref(db, "/space"), {
    type: data
  })
  window.location.reload();
}



function crowdMeter(num){
  let lst = []
  for(let i = 0; i != 10; i++){
    lst.push(<div style={{padding:"2px", display:"inline"}}>
      <FontAwesomeIcon icon={faUser} style={{color:i<num?"black":"grey"}} size="lg"/>
    </div>)
  }
  return lst
}

function Stream() {
  const [room_value, set_roomValue] = useState();
  const [obstacle_value, set_obstacleValue] = useState();
  const [pop, set_pop] = useState();
  const [img, set_img] = useState("");
  const [room_type, set_room_type] = useState();
  const [past_pops, set_past_pops] = useState([14]);
  const [space_type, set_space_type] = useState([]);

  function get_maximum_occupancy(){
    if (space_type == "Educational"){
      return Math.round(room_value/25)
    } else if (space_type == "Assembly"){
      return Math.round(room_value/12.5)
    } else if (space_type == "Office"){
      return Math.round(room_value/100)
    } else {
      return Math.round(room_value/60)
    }
  }

  useEffect(()=>{
    const int = setInterval(()=>{
      fetch("https://5e92-129-2-194-203.ngrok-free.app/ppl").then(res=>res.text()).then((pop)=>{
        set_pop(pop)
        set_past_pops(past_pops=>[...past_pops, {pop}])
      })
      fetch("https://5e92-129-2-194-203.ngrok-free.app/img").then(res=>res.text()).then((img)=>{
        set_img(img)
      })
    }, 100)
    return ()=>clearInterval(int)
  },[])

  useEffect(() => {
      get(ref(db, "/room/size"), )
        .then((snapshot) => {
          set_roomValue(snapshot.val())
        })
        .catch((err) => {
          console.error(err);
      });
      get(ref(db, "/obstacle/state"), )
        .then((snapshot) => {
          set_obstacleValue(snapshot.val())
        })
        .catch((err) => {
          console.error(err);
      });
      get(ref(db, "/room/type"), )
        .then((snapshot) => {
          set_room_type(snapshot.val())
        })
        .catch((err) => {
          console.error(err);
      });
      get(ref(db, "/space/type"), )
        .then((snapshot) => {
          set_space_type(snapshot.val())
        })
        .catch((err) => {
          console.error(err);
      });
  });

  return (
    <Container fluid>
          {/*  Main video streaming row */}
          <Row className ="justify-content-center">
            <Col xs={6} sm={6} lg={5} xl={4} className="mt-5">
              <Container fluid>
                 <img className="img-fluid" src={"data:image/png;base64,"+img} alt="livefee" style={{width:"600px", height:"300px"}}></img>
              </Container>
            
            </Col>
            <Col xs={6} sm={6} lg={5} xl={4} className="mt-5">
              <LineChart width={400} height={400} data={past_pops}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="pop" stroke="#8884d8" />
                <YAxis />
              </LineChart>
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
                  {crowdMeter(pop/get_maximum_occupancy()*10)} {Math.round(pop/get_maximum_occupancy()*100)}%
                </Col>
                
              </Row>
              <Row className="mt-3 pb-3 fs-5 border-bottom border-5"> 
                <Col xs={2} md={4}>
                  <Button className="fs-4 btn-dark fw-bolder"> Estimated Population: </Button> 
                </Col>
                <Col className="fs-4 text-start">
                {pop}
                </Col>
              </Row>
              
              
              <Row className="mt-3 pb-3 fs-5 "> 
                  <Col>
                    <Button className="fs-4 btn-dark fw-bolder"> Room Size (Sq. ft): </Button> 
                  </Col>
                  
                  <Col  className="fs-4 text-start">
                    {room_value}
                  </Col>
                  
              </Row>
              <Col className="border-5 border-bottom border-5 pb-2"> 
                      <label className="fs-5">
                        Change Room Size
                        <input id="room_number_box" type="number" className="mx-2" />
                      </label>
                      <Button onClick={() => updateRoomSize(document.getElementById("room_number_box").value)} className = "mt-2 mt-md-0 mx-2 btn-dark mb-2 fw-bolder" type="number" value="Submit"> Submit </Button>
              </Col>
              


              <Row className="mt-3 pb-3 fs-5 border-5 pb-2"> 
                 <Col xs={1} md={2}>
                  <Button className="fs-4 btn-dark fw-bolder"> Space Type: </Button> 
                 </Col>
                 <Col  className="fs-4 text-start">
                 <Col> 
                 {space_type}
                    <Button onClick={() => space_func("Assembly")} className="fs-5 mx-2 btn-light"> Assembly Space </Button>
                    <Button onClick={() => space_func("Office")} className="fs-5 mx-2 btn-light"> Office Space </Button>
                    <Button onClick={() => space_func("Educational")} className="fs-5 mx-2 btn-light"> Educational Space </Button>
                    <Button onClick={() => space_func("Retail")} className="fs-5 mx-2 btn-light"> Retail Space </Button>
                  </Col>
                 </Col>
                  
              </Row>
             
              
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
