import React, { Component } from 'react'
import { Row,} from 'reactstrap'
import Header from '../components/Header'
//import SideBar from '../components/SideBar'
import { connect } from 'react-redux'

class Main extends Component {
    margin = {
        marginTop: '70px'
    }
    
    render() {
        return(
            <div>
                <Row>
                    <Header navItems={this.props.navItems} onClick={this.onClick} currentPage={this.props.currentPage}/>
                </Row>
                <hr style={{marginTop: '54px'}} />
                <Row style={this.margin}>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        navItems: state.nav,
        currentPage: state.router.location.pathname
    }
}

 
export default connect(mapStateToProps)(Main)

//export default Main