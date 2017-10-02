import React from 'react';
import GameBoard from '../component/GameBoard';
import Questions from '../component/Questions';
import Answers from '../component/Answers';


class GameContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            remainingChoices: ["Dave", "Emily", "John", "Sarah"],
            winningChoice: "John",
            endGameMessage: "", 
           
            data: [
                {
            id: "2",
            name: "John",
            hairColour: "brown",
            glasses: true,
            selected: false,
            image: "https://cdnd.lystit.com/photos/f98e-2016/01/02/asos-black-round-clear-lens-glasses-in-black-with-tort-arms-product-0-450514459-normal.jpeg"
        },
        {
            id: "0",
            name: "Dave",
            hairColour: "brown",
            glasses: false,
            selected: false,
            image: "https://i.pinimg.com/736x/4f/de/fe/4fdefe7a18c0933838cad7d76e5529ff--short-textured-haircuts-mens-short-haircuts.jpg"
        },
        {
            id: "3",
            name: "Emily",
            hairColour: "red",
            glasses: false,
            selected: false,
            image: "https://i.pinimg.com/736x/c5/51/50/c55150c74b8a77dc0502da4dfa6021d0--redhead-woman-red-head.jpg"
        },
        {
            id: "1",
            name: "Sarah",
            hairColour: "blonde",
            glasses: true,
            selected: false,
            image: "http://photo.solidstockartcontent.com/stock-photo-blond-haired-woman-with-glasses-brown-eyes-and-blonde-hair-looking-at-the-viewer-and-smiling-holding-books-103218.png"
        }
    ]
        }
    }

    returnWinningChoice() {
        let choice = this.state.winningChoice;
        return choice
    }

    checkForWinner() {
        if ( this.state.remainingChoices.length > 1 ) {
            return
        } 
        for (var i = 0; i < this.state.remainingChoices.length; i++) {
            console.log(this.state.remainingChoices[i])
            if ( this.state.remainingChoices[i] === this.state.winningChoice ) {
                this.setState( { endGameMessage: "You win!" } )
            } else {
                this.setState( { endGameMessage: "You lose!" } )
            }
        }
    }

    crossOutImg( name ) {
        let tempArray = this.state.data;
        for (var i = 0; i < tempArray.length; i++) {
            if ( tempArray[i].name === name ) {
                tempArray[i].image = "https://openclipart.org/image/2400px/svg_to_png/174484/Red-Cross.png"
                this.setState( { data: tempArray } )
            }
        }
    }

    removeSelection( name ) {
        let tempArray = this.state.remainingChoices;
        for (var i = 0; i < tempArray.length; i++) {
            if ( tempArray[i] === name ) {
                let a = tempArray.indexOf(tempArray[i]);
                tempArray.splice( a, 1 );
                this.setState( { remainingChoices: tempArray } )
            }
        }
    }

    render() {
        return(
            <section>
            <GameBoard 
                data={this.state.data} 
                checkForWinner={ this.checkForWinner.bind(this) } 
                removeSelection={ this.removeSelection.bind(this) } 
                crossOutImg={ this.crossOutImg.bind(this) }
                />
            <h1> { this.state.endGameMessage } </h1>
            <Questions returnWinningChoice={ this.returnWinningChoice.bind(this) } />
            <Answers/>
            </section>
        )
    }

} 

export default GameContainer;