import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href="/admin">Quiz-Attendance</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          <Nav.Link><Link to='/admin'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/admin/classes'>Classes</Link></Nav.Link>
          <NavDropdown title='Reports' id='basic-nav-dropdown'>
            <NavDropdown.Item><Link to='/admin/bonus-reports'>Bonus</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to='/admin/attendance-reports'>Attendance</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Link to='/admin/warning'>Warning</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
