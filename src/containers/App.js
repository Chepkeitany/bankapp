import React, { Component } from "react";
import formatNumber from "format-number";
import { connect } from "react-redux";
import "./App.css";
import { withdrawMoney, depositMoney, fetchUserProfile } from '../actions';

class App extends Component {
  static defaultProps = {
    username: "",
    totalAmount: 0,
    userPic: "",
    withdrawMoney: () => {},
    fetchUserProfile: () => {},
    isLoading: true
  };
  
  componentDidMount() {
    this.props.fetchUserProfile();
  }
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
      <div className={`App ${this.props.isLoading ? "App--loading" : ""}`}>
        <img className="App__userpic" src={this.props.userPic} alt="user" />
        <p className="App__username">Hello, {this.props.username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(this.props.totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button
            data-amount="10000"
            onClick={dispatchWithdrawAction}
            disabled={this.props.isLoading}>
            WITHDRAW $10,000
            </button>
          <button
            data-amount="5000"
            onClick={dispatchDepositAction} 
            disabled={this.props.isLoading}>
            DEPOSIT $5,000
            </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    totalAmount: state.totalAmount,
    username: state.username,
    userPic: state.userPic,
    isLoading: state.isLoading
});

const mapDispatchToProps = {
  withdrawMoney,
  depositMoney,
  fetchUserProfile
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
