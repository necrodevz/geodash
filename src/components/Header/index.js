import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Col } from 'reactstrap'
//import LockButton from '../Lock'
import { Link } from 'react-router-dom'
import {version} from '../../../package.json'

const Header = ({navItems, onClick, currentPage}) => {
    
    const items = navItems
    return(
        <nav>
            <Navbar toggleable fixed='top'>
                <Col md={4}>
                    <NavbarBrand>
                        <NavbarToggler />
                        <h2> Geoland Dashboard <small>v{ version }</small></h2>
                    </NavbarBrand>
                </Col>
                <Col md={{size:2, offset:4}}>
                    <Collapse navbar isOpen>
                        <Nav tabs navbar>
                            {
                                items.map((item) => {
                                    return(
                                        <NavItem key={item.key}>
                                            <NavLink tag={Link} to={item.url} active={item.url === currentPage ? true : false}>{item.label}</NavLink>
                                        </NavItem>
                                    )
                                })
                            }
                        </Nav>
                    </Collapse>
                </Col>
            </Navbar>
        </nav>
    )
}

export default Header