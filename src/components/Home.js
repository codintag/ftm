import React, { Component } from 'react'
import { Button } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavLink to="/teams">
                    <Button className="homeBtn" outline color="info" size="lg">Go to the teams page</Button>{' '}
                </NavLink>
            </div>
        )
    }
}

export default Home;