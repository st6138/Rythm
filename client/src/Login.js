import React from 'react';
import Carousel from 'react-bootstrap/Carousel';import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=537b578927584dca957f78a8139be3ba&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
  return (
    
    <Container
    className="d-flex  flex-column justify-content-center f align-items-center" 
    style={{ minHeight: "100vh" ,backgroundColor:"#000000" }}
    >
        {/* item 1 */}
          <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block " 
          src="https://mybucketforrhythm.s3.ap-south-1.amazonaws.com/cold%2C+smooth+%26+tast22..png "
          style={{height:"100vh"}}
        />
      </Carousel.Item>
      {/* item 2 */}
      <Carousel.Item >
      <img
          className="d-block " 
          src="https://mybucketforrhythm.s3.ap-south-1.amazonaws.com/cold%2C+smooth+%26+tasty.png "
          style={{height:"100vh"}}
        />
        <Carousel.Caption>
        <a className="btn btn-dark btn-lg" href={AUTH_URL}>Login With Rhythm</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>

//{/* <Container
// className="d-flex  flex-column justify-content-center f align-items-center" 
// style={{ minHeight: "100vh" ,backgroundColor:"#1A120B" }}
// >
//   <Figure>
//           <Figure.Image src="https://mybucketforrhythm.s3.ap-south-1.amazonaws.com/rhythm-1.jpg" width={300}
//   height={180}
//   alt="171x180" />
//   </Figure>
// <a className="btn btn-light btn-lg" style={{display:"absolute",position:" 1vh 1vh "}} href={AUTH_URL}>
//   Login With Rhythm
// </a>
//</Container> */}
  )
  
}
