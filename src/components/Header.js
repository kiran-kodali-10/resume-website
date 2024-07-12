import React, { useEffect, useState } from 'react';
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

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pages = ['About', 'Experience', 'Projects', 'Contact'];
  const pageSections = {
    "About": '#about-section',
    "Experience": "#experience-section",
    "Projects": "#project-section",
    "Education": "#education-section",
    "Contact": "#contact-section",
  }

  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    < >
      <Navbar className={`px-4 py-4 navbar-container ${isScrolled ? 'scrolled' : ''}`} dark sticky="top" expand="md">
        <NavbarBrand href="/">
          <h4 className="mb-0 website-heading">My Resume</h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {
              Object.entries(pageSections).map(([key, value]) => {
                
                return (
                  <NavItem key={key} className="px-2 py-2 nav-item">
                    <NavLink className='nav-link'  href={value}>{key}</NavLink>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;