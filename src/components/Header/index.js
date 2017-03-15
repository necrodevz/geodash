import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
import LockButton from '../Lock'
import {connect} from 'react-redux'
import {version} from '../../../package.json'


const Header = (props) => {
    console.log(props)
    const items = props.navItems
    return(
        <nav>
            <Navbar inverse fixed toggleable>
                <NavbarBrand>
                    <NavbarToggler />
                    <h2> Geoland Dashboard <small>v{ version }</small></h2>
                </NavbarBrand>
                <Collapse navbar>
                    <Nav className='ml-auto' color='faded' pills onSelect={props.handleSelect}>
                        {
                            items.map((item) => {
                                return(
                                    <NavItem key={item.key}>
                                        <NavLink href={item.url}>{item.label}</NavLink>
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        navItems: state.nav,
        currentPage: state.currentPage
    }
}

 
export default connect(mapStateToProps)(Header)