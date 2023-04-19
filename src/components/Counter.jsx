import React, {Component} from "react";
import './counter.css'

class Counter extends Component{
    state = {
        count: 0
    }
    render() {
        return(
           <div>
            <button onClick={this.handleIncrement}>Povecaj</button>
            <button onClick={this.handleDecrement}>Smanji</button>
            <span>{this.formatCount()}</span>
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