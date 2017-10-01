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
            remainingChoices: ["Dave", "Emily", "John", "Sarah"],
            winningChoice: "John",
            endGameMessage: "" 
        }
    }

    removeSelection( name ) {
        for (var i = 0; i < this.state.remainingChoices.length; i++) {
            if ( i === name ) {
                let a = this.state.remainingChoices.indexOf(i);
                this.state.remainingChoices.splice( a, 1 );
            } else {
                return
            }
        }
    }

    checkForWinner() {
        if ( this.state.remainingChoices.length > 1 ) {
            return
        } for (var i = 0; i < this.state.remainingChoices.length; i++) {
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