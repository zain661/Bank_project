import React, { Component } from "react";

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      Amount: null,
      Vendor: "",
      Category: "",
    };
  }

  newTransaction = (event) => {
    console.log(event);
    let inputId = event.target.id;
    if (inputId === "Amount") this.setState({ Amount: event.target.value });
    else if (inputId === "Vendor")
      this.setState({ Vendor: event.target.value });
    else this.setState({ Category: event.target.value });
  };

  addTransaction = (event) => {
    let inputId = event.target.id;

    if (inputId === "deposit") {
      this.props.addTransaction(
        this.state.Amount,
        this.state.Vendor,
        this.state.Category
      );
      window.location.href = "http://localhost:3000";
    } else {
      this.props.addTransaction(
        this.state.Amount * -1,
        this.state.Vendor,
        this.state.Category
      );
      window.location.href = "http://localhost:3000";
    }
  };

  render() {
    return (
      <div className="operation-container">
       <form>
    <label>Amount</label>
    <input
          type="text"
          id="Amount"
          value={this.state.Amount}
          onChange={this.newTransaction}
        />

    <label>Vendor</label>
    <input
          type="text"
          id="Vendor"
          value={this.state.Vendor}
          onChange={this.newTransaction}
        />

    <label>Category</label>
    <input
          type="text"
          id="Category"
          value={this.state.Category}
          onChange={this.newTransaction}
        />
  </form>
        <button onClick={this.addTransaction} id="deposit">
          Deposit{" "}
        </button>
        <button onClick={this.addTransaction} id="withdraw">
          Withdraw{" "}
        </button>
      </div>
    );
  }
}

export default Operations;
