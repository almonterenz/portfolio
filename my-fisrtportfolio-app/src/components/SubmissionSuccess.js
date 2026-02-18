// src/components/SubmissionSuccess.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const SubmissionSuccess = ({ data }) => {
  return (
    <Container className="mt-5">
      <Card className="text-center border-success">
        <Card.Body>
          <Card.Title className="text-success">Success!</Card.Title>
          <Card.Text>
            Thank you, <strong>{data.name}</strong>! Your message has been sent.
          </Card.Text>
          <hr />
          <div className="text-start">
            <p><strong>Submitted Details:</strong></p>
            <p>Email: {data.email}</p>
            <p>Message: {data.message}</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SubmissionSuccess;