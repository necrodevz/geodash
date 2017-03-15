import React from 'react'
import {Col, Jumbotron, Button} from 'reactstrap'
import Link from 'react-router'

const Home = () => {
    return(
        <div>
            <Col>
                <Jumbotron>
                  <h1>Welcome to the new Geoland Dashboard</h1>
                  <p> This is currently a work in progress and may change at any time. Please read this area for any announcements regarding changes.</p>
                  <Col mdOffset={3} md={6} className='well'>
                    <Button bsStyle="primary" bsSize="large" block><Link to='/apps'>Click here to continue</Link></Button>
                  </Col>
                </Jumbotron>
            </Col>
        </div>
    )
}

export default Home