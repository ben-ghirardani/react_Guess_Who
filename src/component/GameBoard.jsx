import React from 'react';
// import ReactDOM from 'react-dom';
import DaveCard from '../component/DaveCard';
import SarahCard from '../component/SarahCard';
import JohnCard from '../component/JohnCard';
import EmilyCard from '../component/EmilyCard';
// import GameContainer from '../container/GameContainer';

class GameBoard extends React.Component {

    render() {
        return(
        <section className="game-board">
            <DaveCard checkForWinner={ this.props.checkForWinner } removeSelection={ this.props.removeSelection } />
            <SarahCard checkForWinner={ this.props.checkForWinner } removeSelection={ this.props.removeSelection } />
            <JohnCard checkForWinner={ this.props.checkForWinner } removeSelection={ this.props.removeSelection } />
            <EmilyCard checkForWinner={ this.props.checkForWinner } removeSelection={ this.props.removeSelection } />
        </section>
        )
    }

}

export default GameBoard;