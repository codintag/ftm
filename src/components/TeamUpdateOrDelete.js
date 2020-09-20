import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import Navigbar from './Navbar';
import axios from 'axios';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
// all of my imports above

class TeamUpdateOrDelete extends Component{
  constructor(props) {
    super(props);

    this.state = {
      pays : "",
      id_params : this.props.match.params.id, // for get my params
    }
  }

  //function will be called after render function
  componentDidMount() {
    axios.get('http://localhost:3051/teams/' + this.state.id_params)
        .then(response => response)
        .then(teams => {
            return this.setState({pays : teams.data.data.nom_equipe})
          })
            
        }
  
  //get input field values
  handleChange = (e) => {
    this.setState({pays : e.target.value});
  }

  //modify a team
  handleModify = (e) => {
    let url = `http://localhost:3051/teams/${this.state.id_params}`;
      axios.put(url, {
      nom_equipe: this.state.pays
    }).then((response) => {
            console.log(response);
            alertify.success("L'équipe " + this.state.pays + " a bien été modifié!");
            console.log("Le pays a bien été modifié!");
          })
          .catch( (error) => {
            console.log(error);
        });

        e.preventDefault();
  }

  //delete a team
  handleDelete = () => {
      let url = `http://localhost:3051/teams/${this.state.id_params}`;
      axios.delete(url).then((response) => {
            console.log(response);
      }).then(() => {

        if(window.confirm('Êtes-vous sûre de supprimer cet équipe?')){

          alertify.error("L'équipe " + this.state.pays + " a bien été supprimée!");
          this.props.history.push('/teams');

        } else {
          alertify.warning("te stresse pas, rien n'a été supprimée");
        }

      })
          .catch( (error) => {
            console.log(error);
        });
  }

  render() {
    console.log(this.state.pays);
    console.log(this.state.id_params);
    return (
      <div className="updateDeleteComponent">
        {/* my navbar section */}
            <Navigbar />

            {/* my button link to redirect teams page */}
          <section className="sectionGoTeams">
                    <NavLink to="/teams">
                            <Button className="goToTeamBtn" outline color="info" size="lg">Go to the teams page</Button>{' '}
                    </NavLink>
                </section>
          
          {/* my forms section */}
          <div className="updateDeleteBtns">  
            <p className="equipeParaUpDel">{this.state.pays}</p>

                <Form inline className="formulaire" onSubmit={this.handleModify}>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input 
                    type="text" 
                    name="pays" 
                    id="ajouter_pays" 
                    value={this.state.pays}
                    placeholder="Ajouter un pays"
                    onChange={this.handleChange} />
                    
                  </FormGroup>
                  <Button color="primary">modifier</Button>
                  <Button onClick={this.handleDelete} className="ml-2" color="warning">supprimer</Button>
                </Form>
        </div>
      </div>
    )
  }
}

// export my component
export default TeamUpdateOrDelete;
