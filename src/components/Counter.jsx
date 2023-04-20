import React, {Component} from "react";
import './counter.css'

class Counter extends Component{
    state = {
        count: 0,
    }
    render() {
        let classes = "badge";
        classes += this.state.count === 0 ?  " green" :  " blue";


        return(
           <div>
            <button onClick={this.handleIncrement}>Povecaj</button>
            <button onClick={this.handleDecrement}>Smanji</button>
            <span className={classes}>{this.formatCount()}</span>
           </div>
        )
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Nula' : this.state.count;
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1})
    }
}

export default Counter;