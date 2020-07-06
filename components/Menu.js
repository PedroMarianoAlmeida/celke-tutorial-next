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
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link href="/">Celke Tutorial</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink><Link href="/"> Início </Link></NavLink>
            </NavItem>

            <NavItem>
              <NavLink><Link href="/sobre"> Sobre </Link></NavLink>
            </NavItem>

            <NavItem>
              <NavLink><Link href="/contato"> Contato </Link></NavLink>
            </NavItem>            
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;