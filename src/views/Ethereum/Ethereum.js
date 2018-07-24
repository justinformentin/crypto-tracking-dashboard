import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { Timeline } from 'react-twitter-widgets';
import CryptoChart from './components/CryptoChart'
import CryptoNews from '../RedditResults/CryptoNews';

import {
  Card,
	CardBody,
	CardColumns,
  CardHeader,
  Col,
  Row
  } from 'reactstrap';

class Ethereum extends Component {
  // if user visits 'cryptoNews' or 'cryptoChart' pages the default chosen crypto asset is Bitcoin
  state = {
  searchTerm: '',
  chosenCryptoName: 'Ethereum',
  chosenCryptoSymbol: 'ETH'
  };

  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route
      path="/"
      render={props => (
        <div>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                    <CryptoChart />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>          
					<CardColumns className="cols-2">
						<Card>
							<CardHeader>Reddit </CardHeader>
							<CardBody>
								<Scrollbars
									style={{ height: 405 }}>
									<div>
										<CryptoNews
											chosenCryptoName={this.state.chosenCryptoName}
											chosenCryptoSymbol={this.state.chosenCryptoSymbol}
							      />
									</div>	
								</Scrollbars>	
							</CardBody>
						</Card>
						<Card>
							<Timeline
								dataSource={{
									sourceType: 'profile',
									screenName: 'ethereum'                
								}}
								options={{
									theme: 'dark',
									height: '500px'
								}}
								onLoad={() => console.log('Timeline is loaded!')}
							/>
						</Card>
					</CardColumns>	
        </div>
      )}
      />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default Ethereum;
