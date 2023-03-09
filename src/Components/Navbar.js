import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter ,
  Routes,
  Route,
  Link } from "react-router-dom";
import Home from "../Screens/Home";
import Skills from "../Screens/Skills"
import Project from "../Screens/Project"
import Blog from "../Screens/Blog"
import logo from "../Images/logokbr.jpg"

function CollapsibleExample() {
  return (
    <BrowserRouter>
   
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark"  fixed="top"  >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/"  className='nav-item'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Skills"  className='nav-item'>Skills</Nav.Link>
            <Nav.Link as={Link} to="/Project"  className='nav-item'>Project</Nav.Link>
            <Nav.Link as={Link} to="/Blog"  className='nav-item'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SKills' element={<Skills />}/>
        <Route path='/Project' element={<Project />}/>
        <Route path='/Blog' element={<Blog />}/>
        </Routes>
    
   </div>
    </BrowserRouter>
  );
}

export default CollapsibleExample;