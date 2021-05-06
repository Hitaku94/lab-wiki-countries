import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Nav style={{backgroundColor: 'blue', width: '100%'}} defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link style={{color: 'white'}} href="/home">WikiCountries</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavBar