import React from 'react';
// import ReactDOM from 'react-dom';
import GameBoard from '../component/GameBoard';
// import DaveCard from '../component/DaveCard';
// import SarahCard from '../component/SarahCard';
// import JohnCard from '../component/JohnCard';

class GameContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            remainingChoices: [0, 1, 2, 3],
            winningChoice: 3,
            endGameMessage: "" 
        }
    }

    removeSelection( eventData ) {
        let choicesLeft = this.state.remainingChoices.bind(this);
        choicesLeft.splice( eventData, 1 );
    }

    checkForWinner() {
        let peopleLeft = this.state.remainingChoices;
        if ( peopleLeft.length > 1 ) {
            return
        } for (var i = 0; i < peopleLeft.length; i++) {
            if ( i === this.state.winningChoice ) {
                this.setState( { endGameMessage: "You win!" } )
            } else {
                this.setState( { endGameMessage: "You lose!" } )
            }
        }
    }

    render() {
        return(
            <div>
            <GameBoard checkForWinner={ this.checkForWinner.bind(this) } removeSelection={ this.removeSelection.bind(this) } />
            <h1> { this.state.endGameMessage } </h1>
            </div>
        )
    }

} 

export default GameContainer;