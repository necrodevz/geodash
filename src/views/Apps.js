import React from 'react'
import { connect } from 'react-redux'
import { AppCard } from '../components/Card'
import { CardDeck } from 'reactstrap'
//import '../../node_modules/opn'

//const opn = window.opn;

const onClick = (target) => {
    console.log(target)
    //opn(target.url, target.app)
}

const Apps = (props) => {
    const sites = props.appSites
    console.log(sites)
    return(
        <CardDeck>
            {
                sites.map((site)=>{
                    return(
                        <AppCard onClick={ onClick } {...site} />
                    )
                })
            }
        </CardDeck>
    )
}


const mapStateToProps = (state) => {
    return {
        appSites: state.apps
    }
}

 
export default connect(mapStateToProps)(Apps)

//export default Apps