import React from 'react'
import {Link} from 'react-router-dom';

class Team extends React.Component {
    //la flemme de changer en functional compo..
    render() {
        return (
        <p>
            {/* my redirection to the single team */}
            <Link className="teamParaLink" to={"/teams/" + this.props.datas.id_equipe}>{this.props.datas.nom_equipe}</Link>
        </p>
                )
    }
    
}
//export my component
export default Team;