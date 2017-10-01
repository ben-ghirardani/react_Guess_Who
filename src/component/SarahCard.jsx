import React from 'react';
// import ReactDOM from 'react-dom';
// import GameBoard from '../component/GameBoard';
// import GameContainer from '../container/GameContainer';

class SarahCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: "1",
            name: "Sarah",
            hairColour: "blonde",
            glasses: true,
            selected: false,
            image: "http://photo.solidstockartcontent.com/stock-photo-blond-haired-woman-with-glasses-brown-eyes-and-blonde-hair-looking-at-the-viewer-and-smiling-holding-books-103218.png"
        }
    }

    handleClick(event) {
        this.setState( { 
            selected: true,
            image: "https://openclipart.org/image/2400px/svg_to_png/174484/Red-Cross.png" 
        } )
        let name = this.state.name;
        this.props.removeSelection(name);
        this.props.checkForWinner();
    }

    render() {
        return(
            <div className="card">
                <h4><b> { this.state.name } </b></h4>
                <button onClick={this.handleClick.bind(this)}> Select </button>
                <img src={ this.state.image }  alt="Sarah avatar"  />
            </div>
        )
    }

} 

export default SarahCard;