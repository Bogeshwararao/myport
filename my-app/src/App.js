import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { BrowserRouter, Route,Link,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/Home" element={Home}></Route>
          <Route path="/Skills" element={Skills}></Route>
          <Route path="/About" element={About}></Route>
          <Route path="/Contact" element={Contact}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
