import React, {Component} from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: 'şans oyunu',
    maxBalls:6,
    maxNum:40,
  }
  constructor(props){
    super(props)
    this.state = {
      nums: Array.from({length: this.props.maxBalls})
    }
    this.handleClick = this.handleClick.bind(this)
  }
generete() {
  this.setState((currState) => ({
    nums: currState.nums.map(
      (n) => Math.floor(Math.random() * this.props.maxNum ) +1 )
  }))
}

handleClick()  {
  this.generete()
}
  render() {
    return(<>
    <section>
      <h1>{this.props.title} </h1>
    <div>
      {this.state.nums.map((n) => (
        <Ball num={n} />
      ))}
      </div>
      <button onClick={this.handleClick}>günün şanslı sayıları</button>
    </section>
    </>)
  }
}

export default Lottery