import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

// my Home component
class Home extends Component {
    render() {
        return (
            // my link redirection to the teams page
            <div className="home">
                {/* NavLink from react router dom and button from react strap here */}
                <NavLink to="/teams">
                    <Button className="homeBtn" outline color="info" size="lg">Go to the teams page</Button>{' '}
                </NavLink>
            </div>
        )
    }
}

// export my Home component
export default Home;