import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Link from 'react-router'
import LockButton from '../Lock'

class Header extends Component {
    
    
    render() {
        return(
            <nav>
                <Navbar collapseOnSelect fixedTop fluid inverse>
                    <Navbar.Header>
                        <Navbar.Toggle />
                        <h2> Geoland Dashboard </h2>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="tabs" pullRight onSelect={this.props.handleSelect}>
                            {
                                this.props.navItems.map((item, key) => {
                                    <NavItem key={key}><Link to={item.url}>{item.label}</Link></NavItem>
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        )
    }
}