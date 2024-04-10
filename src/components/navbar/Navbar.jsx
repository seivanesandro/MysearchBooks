import React from 'react';
//import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png';
import { IoBookSharp } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import styled, {
    keyframes
} from 'styled-components';
import { NavLink } from 'react-router-dom';

const RotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const IconsStyleHome = styled(FaHome)`
    &:hover {
        animation: ${RotateIn} 2s;
    }
`;

const IconsStyleGenre = styled(IoBookSharp)`
    &:hover {
        animation: ${RotateIn} 2s;
    }
`;

const NavbarMenu = props => {
    const isActive = true;
    return (
        <Navbar
            expand="lg"
            data-bs-theme="dark"
            className="bg-body-tertiary text-light py-1"
            style={{
                borderBottom:
                    '0.1rem solid rgba(255, 255, 255)',
                boxShadow: ' 0 0 0.7rem #6DD5FA'
            }}
            fixed="top"
        >
            <Container fluid className="gap-5">
                <Navbar.Brand>
                    <NavLink
                        to="/"
                        title="Home"
                        id="home"
                    >
                        <img
                            src={logo}
                            alt="responsive-img"
                            style={{
                                width: '150px',
                                height: '140px'
                            }}
                            className="m-2"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end align-items-center my-5"
                >
                    <Nav className="me-auto gap-5 d-flex flex-row justify-content-end">
                        <NavLink
                            to="/"
                            title="Home"
                            id="home"
                            className="d-flex flex-column align-items-center"
                            active={
                                isActive
                                    ? isActive
                                    : ''
                            }
                        >
                            <IconsStyleHome
                                size="30"
                                className="icons-style"
                            />
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            to="/genre"
                            title="Genres"
                            className="d-flex flex-column align-items-center"
                            active={
                                isActive
                                    ? 'style={{color: #FAFAFA}}'
                                    : ''
                            }
                        >
                            <IconsStyleGenre size="30" />
                            Genres
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

NavbarMenu.propTypes = {};

export default NavbarMenu;
