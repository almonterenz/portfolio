import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-wrapper" style={{ backgroundColor: '#f8f9fa', padding: '60px 0', minHeight: '80vh' }}>
      <Container>
        <Row className="align-items-center">
          {/* Image Column */}
          <Col lg={5} className="text-center mb-4 mb-lg-0">
            <Image 
              src="https://tse1.explicit.bing.net/th/id/OIP.TnpDu1U8aWysMipeXAjEqwHaFj?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" // Replace with your image URL or imported file
              alt="My Profile"
              fluid
              rounded
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </Col>

          {/* Text/Intro Column */}
          <Col lg={7}>
            <h1 className="display-4 fw-bold text-dark">
              Hi, I'm <span className="text-primary">Almonte,Renz Policarp N.</span>
            </h1>
            <h3 className="text-secondary mb-4">Aspiring Full-Stack Developer</h3>
            
            <p className="lead text-muted">
              I am a technology enthusiast dedicated to building clean, functional, 
              and user-centric web applications. My career goal is to leverage my 
              skills in React and modern web technologies to solve real-world problems.
            </p>

            <div className="mt-4">
              <h5>Career Goal</h5>
              <p>
                I aim to secure a position in a forward-thinking tech company where I can 
                contribute to large-scale projects, learn from industry experts, and 
                eventually lead a team of innovative developers.
              </p>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
              <Button as={Link} to="/contact" variant="primary" size="lg" className="px-4 me-md-2">
                Get In Touch
              </Button>
              <Button as={Link} to="/skills" variant="outline-secondary" size="lg" className="px-4">
                View My Skills
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};