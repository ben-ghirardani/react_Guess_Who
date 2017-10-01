import React from 'react';
// import ReactDOM from 'react-dom';
// import GameBoard from '../component/GameBoard';
// import GameContainer from '../container/GameContainer';

class EmilyCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: "3",
            name: "Emily",
            hairColour: "red",
            glasses: false,
            selected: false,
            image: "https://i.pinimg.com/736x/c5/51/50/c55150c74b8a77dc0502da4dfa6021d0--redhead-woman-red-head.jpg"
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
                <img src={ this.state.image }  alt="Emily avatar"  /> 
            </div>
        )
    }

} 

export default EmilyCard;