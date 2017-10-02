import React from 'react';
import Card from '../component/Card';

class GameBoard extends React.Component {

    render() {

        const cards = this.props.data.map((object, index) => {
            return <Card 
                        character={object} key={index} 
                        removeSelection={ this.props.removeSelection } 
                        checkForWinner={ this.props.checkForWinner }
                        crossOutImg={ this.props.crossOutImg }
                        />
        })

        return (
        <section className="game-board">
            {cards}
        </section>
        )
    }


}

export default GameBoard;