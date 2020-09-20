import React, { Component } from 'react'
import Navigbar from './Navbar';
import axios from 'axios';
import Team from './Team';
import TeamAdd from './TeamAdd';
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
// all my imports modules and files

class Teams extends Component {
    constructor(props) {
        super(props);
        
        // my state for store all teams 
        this.state = {
            teams : [],
        }
    }

  //function will be called after render function
    componentDidMount() {
        // fetch('https://myteammanager.herokuapp.com/teams')
        //     .then(response => response.json())
        //     .then(datas => console.log(datas.data))

        axios.get('http://localhost:3051/teams')
        .then(response => response)
        .then(team => {
            this.setState({teams : team.data.data});
            this.state.teams.reverse();
        });
    }

    // my event for add a team to my allTeams components
    handleAdd = (pays) => {
        let form = document.forms[0];
        let url = 'http://localhost:3051/teams';
        let newEquipe = {
            nom_equipe: pays
        };

        axios.post(url, newEquipe)
        .then((response) => {
            
            console.log(response);

            form.reset();

            this.setState(prevState => ({teams : [...prevState.teams, newEquipe]}));
            })
        .then(() => alertify.success("L'équipe " + pays + " a bien été ajoutée!"))
        .catch( (error) => {
            console.log(error);
        });

    }

    render() {
        return (
            <div className="allteamscomponent">
            <Navigbar /> {/* my navbar here */}

            <section className="addBtn">
                    <TeamAdd {...this.props} handleAdd={this.handleAdd}/> {/* my component for adding a team*/}

                    {/* link redirection for going to the homepage*/}
                    <NavLink to="/">
                            <Button className="homeBtn" outline color="info" size="lg">Back to home page</Button>{' '}
                    </NavLink>
                </section>
                
                {/* all my team here */}
            <section className='teamscomponent'>
                {/* a loop through my teams state for getting all my teams name */}
                { 
                    this.state.teams.reverse().map((team, i) => <Team key={i} datas={team}/>)
                }
            </section>
            </div>
        )
    }
}
// export my Teams component
export default Teams;