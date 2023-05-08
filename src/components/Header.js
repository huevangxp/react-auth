import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom'
import {AiOutlineLogout} from 'react-icons/ai'

const Header = ({ setLoginStatus }) => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        setLoginStatus(false)
        navigate('/')
    }

    return (
        <div>
            <Navbar className='shadow-sm fixed-top navbar-light bg-light'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                        <img
                            style={{
                                width: 40,
                                height: 40
                            }}
                            src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-letter-l-g-lg-gl-logo-png-image_6109481.jpg" alt="logo" />
                   </Link>
                    </Navbar.Brand>
                    <Nav className=" d-flex justify-content-center">
                        <Nav.Link >
                            <Link to="/" style={{textDecoration:'none', color:'black'}}>
                            Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/about" style={{textDecoration:'none', color:'black'}}>About</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <button className='btn btn-secondary btn-sm' onClick={() => logout()}>
                        <AiOutlineLogout/>
                        </button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header