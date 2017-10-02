import React from 'react';

class Card extends React.Component {

       handleClick(event) {
            let name = this.props.character.name;
            this.props.removeSelection(name);
            this.props.crossOutImg(name);
            this.props.checkForWinner();
    }

    render() {
        return(
            <div className="card">
                <h4><b> { this.props.character.name } </b></h4>
                 <button onClick={this.handleClick.bind(this)}> Select </button> 
                <img src={ this.props.character.image }  alt="avatar"  /> 
            </div>
        )
    }

} 

export default Card;