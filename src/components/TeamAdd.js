import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class TeamAdd extends Component{
    constructor(props) {
        super(props);

        // initialize my state here with a pays value
        this.state = {
            pays: "",
        }
    }

    // my event for getting input value
    handleChange = (e) => {
        this.setState({pays: e.target.value})
    }

    // redirect = () => {
    //     this.props.history.push('/teams');
    //  }

    render() {
        return (
            // my form for adding a team to the list
          <Form inline className="formulaire">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input 
                type="text" 
                name="pays" 
                id="ajouter_pays" 
                placeholder="Ajouter un pays"
                onChange={this.handleChange} />
            </FormGroup>

            <Button color="primary" onClick={() => this.props.handleAdd(this.state.pays)}>Ajouter</Button>
          </Form>
        );
    }
}

export default TeamAdd;