import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { Timeline } from 'react-twitter-widgets';
import CryptoChart from './components/CryptoChart';
import CryptoNews from '../RedditResults/CryptoNews';

import {
  Card,
	CardBody,
	CardColumns,
  CardHeader,
  Col,
  Row,
  } from 'reactstrap';

class CryptoDetails extends Component {
  state = {
  searchTerm: '',
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
                    <CryptoChart 
                      name={this.props.name} 
                      symbol={this.props.symbol} 
                    />
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
											chosenCryptoName={this.props.name}
											chosenCryptoSymbol={this.props.symbol}
										/>
									</div>	
								</Scrollbars>	
							</CardBody>
						</Card>
						<Card>
							<Timeline
								dataSource={{
									sourceType: 'profile',
									screenName: this.props.twitterScreenname               
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

export default CryptoDetails;
