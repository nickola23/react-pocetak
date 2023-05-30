import React, {Component} from "react";
import './counter.css'
 
function Counters() {
const countersList = [
        {id: 0, value: 1, price: "129.00", name: "AirPods", src: "./counterImages/prod1.jpg"},
        {id: 1, value: 0, price: "229.00", name: "AirPods PRO", src: "./counterImages/prod2.jpg"},
        {id: 2, value: 2, price: "179.00", name: "AirPods", src: "./counterImages/prod1.jpg"},
        {id: 3, value: 0, price: "549.00", name: "AirPods MAX", src: "./counterImages/prod1.jpg"},
        {id: 4, value: 3, price: "799.00", name: "AirPods MAX", src: "./counterImages/prod2.jpg"}
    ];
    return (
        <>
        <ul className="counterUl">
            {countersList.map((counter) => <Counter key={counter.id} value={counter.value} price={counter.price} name={counter.name} src={counter.src} />)}
        </ul>
        </>
    );
}

class Counter extends Component{
    state = {
        count: this.props.value
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Nula' :  this.state.count;
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    handleDecrement = () => {
        this.state.count === 0 ? this.state.count = 0 :  this.setState({ count: this.state.count - 1})
    }

    render() {
        let classes = "badge";
        classes += this.state.count === 0 ?  " green" :  classes += this.state.count > 0 ? " blue" : " red";

        return(
           <div className="item">
            <div className="product">
                <img src= { this.props.src } alt="" class="productImg" />
                <div className="productDesc">
                    <div className="productName">
                        { this.props.name }
                    </div>
                    <div className="productPrice">
                        { this.props.price}
                    </div>
                </div>
                <div className="productCart">
                    <button className="add" onClick={ this.handleIncrement }>+</button>
                    <button onClick={ this.handleDecrement }>-</button>
                    <span className={ classes}>{this.formatCount() }</span>
                </div>
            </div>
           </div>
           
        )
    }
}

export default Counters;