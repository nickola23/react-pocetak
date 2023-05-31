import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Outlet, Link } from "react-router-dom";
import './page404.css';
import fourOhFour from './page404Images/fourOhFour.svg';
import astrodude from './page404Images/astrodude.png';

class Page404 extends Component {

  constructor(props){
    super(props);
    this.state = {
      pageLoaded: false,
      fourOhFourLoaded: false,
      astrotop: '0px',
      astroright: '0px'
    }
  }
  componentDidMount(){
    this.setState({
      pageLoaded: true
    });
  }
  onMouseMove(e){
    this.setState({
      //astrotop: e.clientY/8 + 'px',
      //astroright: e.clientX/8 + 'px'
    })
  }
  render() {
    return (
      <div className="main-wrap justifyCenter">
        <div className="main-container">
          <CSSTransition
            in={this.state.pageLoaded}
            timeout={200}
            classNames="fourOhFour"
            onEntered={() => {
              this.setState({
                fourOhFourLoaded: true
              });
            }}
            unmountOnExit
          >
            {state => (
              <div className="fourOhFour flex justifyCenter" onMouseOver={(e) => {this.onMouseMove(e)}} onMouseOut={() => {this.setState({astrotop: '10px',astroright: '30px'})}}>
                <img src={fourOhFour} alt='Sky full of stars'/>
                <img src={astrodude} alt='Floating astronaut' className="astrodude" style={{"paddingTop": this.state.astrotop, "paddingRight": this.state.astroright}}/>
              </div>
            )}
          </CSSTransition>
          <CSSTransition
            in={this.state.fourOhFourLoaded}
            timeout={600}
            classNames="error-text"
            unmountOnExit
          >
            {state => (
              <div className="error-text flex justifyCenter">
                <h3>Oops… Looks like you got lost</h3>
                <Link to="/">GO HOME</Link>
              </div>
            )}
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Page404;
