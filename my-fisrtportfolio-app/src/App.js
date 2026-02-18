import React from 'react';
// These come from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// These come from react-bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';

// These are your own local files
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Contact from './components/Contact'; 

// IMPORTANT: Ensure you have this CSS import in index.js or App.js 
// to make the Bootstrap styles actually appear!
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MyPortfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
  {/* The Home page acts as the default landing page */}
  <Route path="/" element={<Home />} />
  
  {/* About page route */}
  <Route path="/about" element={<About />} />
  
  {/* Skills page route */}
  <Route path="/skills" element={<Skills />} />
  
  {/* Contact page route (contains the form logic) */}
  <Route path="/contact" element={<Contact />} />
  
  {/* Optional: Redirect any unknown URLs to Home */}
  <Route path="*" element={<Home />} />
</Routes>
    </Router>
  );
}

export default App;