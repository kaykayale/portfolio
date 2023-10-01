import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-section" id="about">
      <Container>
        {/* <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               A BIT ABOUT <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
            I'm a Lebanese-American, Computer Science student passionate about the future of technology.
              <br />
              <br />Currently, I work as a Software Engineer at 
              <i>
                <b className="purple"> NASA Jet Propulsion Laboratories. </b>
              </i>
              <br />
              <br />
              Apart from programming, I enjoy&nbsp;<br />
              <i>
                <b className="purple">
                 Hiking<br />
                 Swimming in the ocean<br />
                 Walking my dog Kobe<br />
                 Dancing/Performing Aerial Silks🤸‍♀️
                </b>
              </i>
              <br />
              <br />
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img width="217px" height="237px"src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row> */}
        <Row>
          {/* <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kaykayale"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
  
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaykayale/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
          
            </ul>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
