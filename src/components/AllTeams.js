import React, { Component } from 'react'
import Navigbar from './Navbar';
import axios from 'axios';
import Team from './Team';
import TeamAdd from './TeamAdd';
import {NavLink} from 'react-router-dom'
import { Button } from 'reactstrap';

class Teams extends Component {
    constructor(props) {
        super(props);
        
        // my state for store all teams 
        this.state = {
            teams : [],
        }
    }

    componentDidMount() {
        // fetch('https://myteammanager.herokuapp.com/teams')
        //     .then(response => response.json())
        //     .then(datas => console.log(datas.data))

        axios.get('https://myteammanager.herokuapp.com/teams')
        .then(response => response)
        .then(teams => {
            this.setState({teams : teams.data.data})
        });
    }

    render() {
        console.log(this.state.teams);
        return (
            <div className="allteamscomponent">
            <Navigbar />
            <section className="addBtn">
                <TeamAdd />
                    <NavLink to="/teams/:id">
                            <Button className="homeBtn" outline color="info" size="lg">Go to Add / Delete page</Button>{' '}
                    </NavLink>
                </section>
                
            <section className='teamscomponent'>
                {
                    this.state.teams.map((team, i) => <Team key={i} datas={team} />)
                }
            </section>
                

            </div>
        )
    }
}

export default Teams;