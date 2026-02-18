import { Container, ListGroup } from 'react-bootstrap';

export const Skills = () => (
  <Container className="mt-5">
    <h2>My Skills</h2>
    <ListGroup variant="flush">
      <ListGroup.Item>JavaScript (ES6+)</ListGroup.Item>
      <ListGroup.Item>React.js</ListGroup.Item>
      <ListGroup.Item>CSS / Bootstrap</ListGroup.Item>
      <ListGroup.Item>Node.js</ListGroup.Item>
    </ListGroup>
  </Container>
);