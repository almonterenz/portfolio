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
              src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/609033977_2014916622386619_2090495801082125380_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGMpukahr7uKB-P0L5nhUGHAwY6Mjhtn2sDBjoyOG2fa4SeDdXzcd44IHz4QSwHZMjRobUGGac0xsZXq3zQ4anN&_nc_ohc=kp9JIoXKyzMQ7kNvwFDfvL4&_nc_oc=AdligdnkaYf7xnPHoIIB0TbbMd_kt4z-K6EtnGdBl3DyNW1-hR2haYZWg8wC9G3RnYw&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=u3t65ito8u9oocwmxeBltQ&oh=00_AfvYDkE7bEQeR8A0ODc_EaQKKkNiAfIRgC0aYuE-lP_lNw&oe=699B1682" // Replace with your image URL or imported file
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