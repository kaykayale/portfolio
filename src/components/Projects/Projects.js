import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import algorithms from "../../Assets/Projects/algorithms.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import nasa from "../../Assets/Projects/nasa.png";
import marina from "../../Assets/Projects/marina-hacks.png";
import beach from "../../Assets/Projects/beachhacks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marina}
              isBlog={false}
              title="Marina Hacks Website"
              description="Crafted a dynamic web platform for the annual CSULB Women in Computing Hackathon."
              ghLink="https://www.marinahacks.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beach}
              isBlog={false}
              title="BeachHacks"
              description="Developed and launched the web application for CSULB’s annual BeachHacks."
              ghLink="https://beachhacks.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="NASA L'SPACE Preliminary Design Review"
              description="My team and I created a full length preliminary design review of a hypothetical moon mission similar to one of NASA's. This project included analyzing components and properties of the moon, while designing a rover that would ensure mission success."
              ghLink="https://docs.google.com/document/d/1fRKoTU22Kd58zhQI3QdkoxDaxOTjiUeUE3F7jBWF6ZQ/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokémon Battle"
              description="Battle your choice of pokemons, while exploring three different maps. Users win by gathering potions and surviving attacks."
              ghLink="https://replit.com/@kaykayale/pokemon"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algorithms}
              isBlog={false}
              title="Algorithms"
              description="Past algorithm projects."
              ghLink="https://replit.com/@kaykayale/Algos-1"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
