import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom'
import Navigbar from './Navbar';


export default function TeamUpdateOrDelete() {
    return (
      <div className="updateDeleteComponent">
            <Navigbar />
          <section className="sectionGoTeams">
                    <NavLink to="/teams">
                            <Button className="goToTeamBtn" outline color="info" size="lg">Go to the teams page</Button>{' '}
                    </NavLink>
                </section>

          <div className="updateDeleteBtns">  
                <Form inline className="formulaire">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="pays" id="ajouter_pays" placeholder="Ajouter un pays" />
                  </FormGroup>
                  <Button color="primary">modifier</Button>
                  <Button className="ml-2" color="warning">supprimer</Button>
                </Form>
        </div>
      </div>
    )
}
