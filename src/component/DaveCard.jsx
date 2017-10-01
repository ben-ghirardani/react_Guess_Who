import React from 'react';
// import ReactDOM from 'react-dom';
// import GameBoard from '../component/GameBoard';
// import GameContainer from '../container/GameContainer';

class DaveCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: "0",
            name: "Dave",
            hairColour: "brown",
            glasses: false,
            selected: false,
            image: "https://i.pinimg.com/736x/4f/de/fe/4fdefe7a18c0933838cad7d76e5529ff--short-textured-haircuts-mens-short-haircuts.jpg"
        }
    }

    handleClick(event) {
        this.setState( { 
            selected: true,
            image: "https://openclipart.org/image/2400px/svg_to_png/174484/Red-Cross.png" 
        } )
        let currentID = Math.floor(this.state.id);
        this.props.removeSelection(currentID);
        this.props.checkForWinner();
    }

    render() {
        return(
            <div className="card">
                <h4><b> { this.state.name } </b></h4>
                <button onClick={this.handleClick.bind(this)}> Select </button>
                <img src={ this.state.image } alt="Dave avatar" /> 
            </div>
        )
    }

} 

export default DaveCard;