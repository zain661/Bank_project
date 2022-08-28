import React, { Component } from "react";
import Transaction from "./Transaction";
import Balance from './Balance'
class Transactions extends Component {

  calculateBalance = () => {
    let totalBalance = 0
    this.props.Transactions.forEach(t => totalBalance += t.Amount)
    return totalBalance
  }
  render() {
    let transactions = this.props.Transactions;
    return (
      <div>
      <Balance calculateBalance={this.calculateBalance} />
      <div className="transactions-container">
      {transactions.map((transaction) => (
        <Transaction
          deleteTransaction={this.props.deleteTransaction}
          key={transaction._id}
          transaction={transaction}
        />
       
      ))}
       
    </div>
    </div>
  
    )
     
  
}
}

export default Transactions;
