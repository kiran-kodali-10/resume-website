import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
// import { NavLink } from 'react-router-dom'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    < >
      <Navbar className="px-4 py-4" color="dark" dark sticky="top" expand="md">
        <NavbarBrand href="/">
          <h4 className="mb-0">My Resume</h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="">
              <NavLink className="nav-link" href="#about-section">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#experience-section">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#projects-section">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#contact-section">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Example;