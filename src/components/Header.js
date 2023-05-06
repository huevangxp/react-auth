import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = ({ setLoginStatus }) => {

    const logout = () => {
        localStorage.removeItem('token')
        setLoginStatus(false)
    }

    return (
        <div>
            <Navbar className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                        <button className='btn btn-outline-danger btn-sm' onClick={() => logout()}>LOGOUT</button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header