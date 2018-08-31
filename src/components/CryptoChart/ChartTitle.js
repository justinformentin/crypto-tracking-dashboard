import React, { Component } from 'react';

/**
* @function ChartTitle
* @description React component that renders header with selected crypto currency's name and symbol.
*/

class ChartTitle extends Component {
  constructor(props) {
    super(props);
  }
    render () {
      return (
        <div className='crypto_title'>
          <h2>{`${this.props.chosenCryptoName} (${this.props.chosenCryptoSymbol})`}</h2>
      </div>
      )
  }
}


export default ChartTitle;
