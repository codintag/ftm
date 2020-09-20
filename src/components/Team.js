import React from 'react'
import {Link} from 'react-router-dom';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <p>
            <Link className="teamParaLink" to={"/teams/" + this.props.datas.id_equipe}>{this.props.datas.nom_equipe}</Link>
        </p>
                )
    }
    
}

export default Team;