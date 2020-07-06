//Next
import Link from 'next/link'

//Reactstrap
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="md" className="bg-dark">
        <Container>
          <NavbarBrand><Link href="/"><a className="text-white"> Celke Tutorial </a></Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavItem>
                <NavLink><Link href="/"><a className="text-white"> Início </a></Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink><Link href="/sobre"><a className="text-white"> Sobre </a></Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink><Link href="/contato"><a className="text-white"> Contato </a></Link></NavLink>
              </NavItem>            
            </Nav>

          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;