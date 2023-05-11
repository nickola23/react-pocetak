import React, {Component} from "react";
import './counter.css'
 
function Counters() {
const countersList = [
        {id: 1, value: 2},
        {id: 2, value: 3},
        {id: 3, value: 0}
    ];
    return (
        <>
        <ul>
            {countersList.map((counter) => <Counter key={counter.id} value={counter.value} />)}
        </ul>
        </>
    );
}

class Counter extends Component{
    state = {
        count: this.props.value,
    }
    render() {
        let classes = "badge";
        classes += this.state.count === 0 ?  " green" :  classes += this.state.count > 0 ? " blue" : " red";

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

export default Counters;