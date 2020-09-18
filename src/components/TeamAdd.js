import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const TeamAdd = (props) => {
  return (
    <Form inline className="formulaire">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="text" name="pays" id="ajouter_pays" placeholder="Ajouter un pays" />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
}

export default TeamAdd;