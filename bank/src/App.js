import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Transactions from "./components/Transactions";
import Breakdown from "./components/Breakdown";
import Operations from "./components/Operations";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      Transactions: [],
      Categories  : [],
      balance: 0,
    };
  }

  addTransaction = async (amount, vendor, category) => {
    await axios.post("http://localhost:2004/transaction", {
      Amount: amount,
      Vendor: vendor,
      Category: category,
    });

    const response = await this.getTransactions();
    this.setState({ Transactions: response.data }, () => {
    });
  };

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:2004/transaction/${id}`);
    const response = await this.getTransactions();
    this.setState({ Transactions: response.data }, () => {
     
    });
  };

  async getTransactions() {
    return axios.get("http://localhost:2004/transactions");
  }

  async componentDidMount() {
    const response = await this.getTransactions();
    this.setState({ Transactions: response.data }, () => {
     
    });
  }

 getCategories =  async () =>{
  let amountOfCategories = await axios.get("http://localhost:2004/breakdown")
  console.log(amountOfCategories);
  this.setState({
    Categories : amountOfCategories.data.map(m => {
      return {
        Category : m._id,
        totalAmount : m.amount
      }
       
      
    })
  })

 }
  render() {

    return (

      <div className="App">
        <Router>
          <div className="links">
          <span className="link">
            <Link to="/">Transactions</Link>
          </span>
          <span className="link">
            <Link to="/operations">Operations</Link>
          </span>
          <span className="link">
            <Link to="/breakdown">Breakdown</Link>
          </span>
          <span className="nameOfBank">Bank of Palestine</span>
          </div>
          
          <div className="route-container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Transactions
                    Transactions={this.state.Transactions}
                    deleteTransaction={this.deleteTransaction}
                  />
                }
              ></Route>

              <Route
                exact
                path="/operations"
                element={<Operations addTransaction={this.addTransaction} />}
              ></Route>
              
              <Route
                exact
                path="/breakdown"
                element = {<Breakdown getCategories = {this.getCategories} Categories = {this.state.Categories}/>}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
