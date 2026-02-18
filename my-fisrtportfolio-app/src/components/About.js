import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const About = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-primary">About Me</h2>
              
              <p className="lead">
                Hello! I am a passionate developer with a strong foundation in building 
                modern web applications. My journey in tech started with a curiosity 
                for how things work under the hood, and it has evolved into a career 
                goal of becoming a Full-Stack Engineer.
              </p>

              <p>
                <strong>Background:</strong> I recently completed my studies in 
                Information Technology, where I focused on software development 
                and UI/UX design. I enjoy the challenge of turning complex problems 
                into simple, beautiful, and intuitive designs.
              </p>

              <hr />

              <h4 className="mt-4">Hobbies & Interests</h4>
              <p>
                When I'm not coding, you can usually find me:
              </p>
              <ul>
                <li><strong>Photography:</strong> Capturing urban landscapes and nature.</li>
                <li><strong>Hiking:</strong> Exploring local trails and staying active.</li>
                <li><strong>Gaming:</strong> I enjoy strategy games that challenge my logic.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};