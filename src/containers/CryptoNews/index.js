import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getRedditResults from '../../helpers/getRedditResults';
import sortBySubreddit from '../../helpers/sortBySubreddit';
import RedditResults from '../../components/RedditResults';
import CryptoChart from '../../components/CryptoChart';
import { Scrollbars } from 'react-custom-scrollbars';
import { Timeline } from 'react-twitter-widgets';
import HeaderBar from '../../components/HeaderBar';
import FooterBar from '../../components/FooterBar';
import Feed from '../../components/NewsFeed';
import {
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  Col,
  Row,
  } from 'reactstrap';


class CryptoNews extends Component {
  state = {
    redditResults: [],
    showModal: false
  }; 

  componentDidMount() {
    const { chosenCryptoName } = this.props;

    getRedditResults(chosenCryptoName).then(response => {
      let sortedRedditResults = sortBySubreddit(response.data.data.children, chosenCryptoName);

      this.setState({
        redditResults: sortedRedditResults
      });
    });
  }


  componentWillReceiveProps(nextProps) {
    const { chosenCryptoName } = this.props;

    if (chosenCryptoName !== nextProps.chosenCryptoName) {
      getRedditResults(nextProps.chosenCryptoName).then(response => {
        let sortedRedditResults = sortBySubreddit(response.data.data.children, chosenCryptoName);

        this.setState({
          redditResults: sortedRedditResults
        });
      });
    }
  }


  render() {
    const { redditResults } = this.state;
    const { chosenCryptoName, chosenCryptoSymbol } = this.props;

    return (
      <div>
        <HeaderBar />
        <div className="crypto_title">
          <h2>{`${this.props.chosenCryptoName} (${this.props.chosenCryptoSymbol})`}</h2>
        </div>

          <Row>
            <Col>
              <CryptoChart chosenCryptoName={chosenCryptoName} chosenCryptoSymbol={chosenCryptoSymbol} />
            </Col>
          </Row>
          <Row className="news-row">
            <CardColumns className="cols-3">
              <Card>
                <CardHeader>Reddit</CardHeader>
                <CardBody>
                  <Scrollbars
                    style={{ height: 405 }}>
                    <ul className="news__reddit-list">
                      <RedditResults redditResults={redditResults} chosenCryptoName={chosenCryptoName} />
                    </ul>
                  </Scrollbars>	
                </CardBody>
              </Card>
              <Card>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: this.props.chosenCryptoName                
                }}
                options={{
                  theme: 'dark',
                  height: '500px'
                }}
                onLoad={() => console.log('Timeline is loaded!')}
              />
              </Card>
              <Card>
                <CardHeader>News Feed</CardHeader>
                <CardBody>
                  <Scrollbars
                    style={{ height: 405 }}>
                    <ul className="news__reddit-list">
                      <Feed chosenCryptoName={chosenCryptoName} />
                    </ul>
                  </Scrollbars>
                </CardBody>
              </Card>
            </CardColumns>
          </Row>
        <FooterBar />
      </div>
    );
  }
}

CryptoNews.propTypes = {
  chosenCryptoName: PropTypes.string,
  chosenCryptoSymbol: PropTypes.string
};

export default CryptoNews;
