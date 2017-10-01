import React from 'react';
// import ReactDOM from 'react-dom';
// import GameBoard from '../component/GameBoard';
// import GameContainer from '../container/GameContainer';

class JohnCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: "2",
            name: "John",
            hairColour: "brown",
            glasses: true,
            selected: false,
            image: "https://cdnd.lystit.com/photos/f98e-2016/01/02/asos-black-round-clear-lens-glasses-in-black-with-tort-arms-product-0-450514459-normal.jpeg"
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
                <img src={ this.state.image }  alt="John avatar"  /> 
            </div>
        )
    }

} 

export default JohnCard;