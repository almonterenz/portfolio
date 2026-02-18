// src/components/Contact.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SubmissionSuccess from './SubmissionSuccess';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess data={formData} />;
  }

  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            required 
            type="text" 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            required 
            type="email" 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            onChange={(e) => setFormData({...formData, message: e.target.value})} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;