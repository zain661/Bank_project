import React, { Component } from "react";

class Breakdown extends Component {
  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    return this.props.Categories.map((m) => {
      return (
      
          <div className="breakdownTable">
          
           <div>Cotegory:  {m.Category}</div> 
           <div> Total Amount:  {m.totalAmount}</div>
          
             
           
       
        </div>
      );
    });
  }
}

export default Breakdown;
