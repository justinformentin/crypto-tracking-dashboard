import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import CryptoTable from './containers/CryptoTable';
import CryptoNews from './containers/CryptoNews';
import "./scss/style.css";


class App extends Component {
  // if user visits 'CryptoNews' pages the default chosen crypto asset is Bitcoin
  state = {
    searchTerm: '',
    chosenCryptoName: 'Bitcoin',
    chosenCryptoSymbol: 'BTC'
  };

  // the term entered into 'searchBar' component
  handleSearchTerm = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  // when 'news' arrow is clicked for a crypto asset, change 'chosenCryptoName' state
  handleChosenCryptoName = chosenCryptoName => {
    this.setState({ chosenCryptoName: chosenCryptoName });
  };

  // when 'news' arrow is clicked for a crypto asset, change 'chosenCryptoSymbol' state
  handleChosenCryptoSymbol = chosenCryptoSymbol => {
    this.setState({ chosenCryptoSymbol: chosenCryptoSymbol });
  };

  render() {
    return (
      <div>	
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (                
                <div className="main-container">
				  <HeaderBar />
                  <SearchBar
                    className={'hide-on-ipad'}
                    searchTerm={this.state.searchTerm}
                    handleSearchTerm={this.handleSearchTerm}
                  />
                  <CryptoTable
                    searchTerm={this.state.searchTerm}
                    handleChosenCryptoName={this.handleChosenCryptoName}
                    handleChosenCryptoSymbol={this.handleChosenCryptoSymbol}
                  />
                </div>
              )}
            />
            <Route
              path="/news"
              render={props => (
                <div>
                  <CryptoNews
                    chosenCryptoName={this.state.chosenCryptoName}
                    chosenCryptoSymbol={this.state.chosenCryptoSymbol}
                  />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>	
    );
  }
}

export default App;
