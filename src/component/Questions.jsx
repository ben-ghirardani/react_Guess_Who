import React from 'react';

class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brownHair: 0
        }
    }

    
    // this.props.returnWinningChoice gives back winningChoice from GameContainer

    // set up a series of methods that run on each button click, e.g. brown hair would check 
    // for the string "brown" against the hair colour of the winning choice, and return something 
    //  back for Answers to print. this.value for what's printed on the button? 

    handleClickBrownHair(event) {
        if ( this.state.brownHair > 0 ) {
            return
         } else {
            let hair = this.state.brownHair
            hair = hair + 1;
            this.setState( { brownhair: hair } )
             console.log(this.state.brownHair)
         }
    }

    render() {
        return(
        <section>
            <button onClick={ this.handleClickBrownHair.bind(this) } > Brown hair? </button>
            <button> Black hair? </button>
            <button> Glasses? </button>
        </section>
    )}

}

export default Questions;