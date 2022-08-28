import React, { Component } from "react";

class Transaction extends Component {
  deleteTransaction = () => {
    this.props.deleteTransaction(this.props.transaction._id);
  };
  render() {
    let transaction = this.props.transaction;
    let transactionColor = "red";
    if (transaction.Amount >= 0) transactionColor = "green"
    else transactionColor = "red"

    return (
      <div className="transaction-container">

      
        <div className={transactionColor}>Amount:
          {transaction.Amount}</div>  
     
      <div>Vendor: {transaction.Vendor}</div> 
        <div>Category: {transaction.Category}</div>
        <button onClick={this.deleteTransaction}>Delete</button>
      </div>
    );
  }
}

export default Transaction;
//  <table style="width:100%">
//   <tr>
//     <th>Amount</th>
//     <th>Vendor</th>
//     <th>Category</th>
//   </tr>
//   <tr>
//     <td className={transactionColor}>{transaction.Amount}</td>
//     <td>{transaction.Vendor}</td>
//     <td> <button onClick={this.deleteTransaction}>Delete</button></td>
//     <td></td>
//   </tr>
// </table> 