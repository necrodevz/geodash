import React from 'react'
import {Col, Jumbotron} from 'reactstrap'
import { Link } from 'react-router-dom'

const margin = {
    marginTop: '30px'
}

const Home = () => {
    return(
        <div>
            <Col>
                <Jumbotron className='text-center' style={margin}>
                  <h1 >Welcome to the new Geoland Dashboard</h1>
                  <p> This is currently a work in progress and may change at any time. Please read this area for any announcements regarding changes.</p>
                  <Col md={{size:8, offset:2}} className='well'>
                    <Link to='/apps' className='btn btn-primary outline block'>Click here to continue</Link>
                  </Col>
                </Jumbotron>
            </Col>
        </div>
    )
}

export default Home