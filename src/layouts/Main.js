import React, { Component } from 'react'
import {Col, Row,} from 'reactstrap'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
//import {Home} from '../views'

class Main extends Component {
    margin = {
        marginTop: '70px'
    }
    
    render() {
        return(
            <div>
                <Row>
                    <Header />
                </Row>
                <Row style={this.margin}>
                    <Col md={{offset:2}} >
                        <Col md={3}>
                            <SideBar />
                        </Col>
                        <Col md={{size:8, offset:1}} >
                            {this.props.children}
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main