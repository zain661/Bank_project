import React, { Component } from 'react';

class Balance extends Component {
    calculateBalance = () =>{
       return this.props.calculateBalance()
    }

    render() {
        let balanceColor 
        if(this.calculateBalance() > 500) balanceColor = "green"
        else balanceColor = "red"
        return (
            <div className='balance'>Balance :<span className={balanceColor}> {this.calculateBalance()}</span></div>
          
            // <div className='balance-container'>
            //       {this.props.balance = 0}
            //     {this.props.Transactions.map(t =>  this.props.balance+= t.amount )}
            //     {this.updateBalance} 
            //     Balance : <span> {this.props.balance} </span>
            // </div>
        );
    }
}

export default Balance;