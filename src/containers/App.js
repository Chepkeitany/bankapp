import React, { Component } from "react";
import formatNumber from "format-number";
import { connect } from "react-redux";
import photographer from "../images/girl.png";
import "./App.css";
import { withdrawMoney, depositMoney } from '../actions';

class App extends Component {  
  render() {
    const dispatchWithdrawAction = e => {
      // Get the button amount value
      const amount = e.target.dataset.amount;
        // Invoke the action creator
      this.props.withdrawMoney(amount);
    };
    const dispatchDepositAction = e => {
      // Get the button amount value
      const amount = e.target.dataset.amount;
        // Invoke the action creator
      this.props.depositMoney(amount);
    }
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {this.props.username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(this.props.totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchWithdrawAction}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={dispatchDepositAction} >DEPOSIT $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    totalAmount: state.totalAmount,
    username: state.username
});

const mapDispatchToProps = {
  withdrawMoney,
  depositMoney
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
