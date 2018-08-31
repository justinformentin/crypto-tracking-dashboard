import React, { Component } from 'react';
import FeedList from './FeedList.js';
import 'whatwg-fetch';


class Feed extends Component {
  constructor() {
    super();
    this.state = {
      source: 'https://cointelegraph.com/rss/tag/',
      feeds: [{guid: 1, title:'No feeds', url:'#'}]
    }
  }

  componentDidMount() {
    this.fetch_feeds()
  }

  fetch_feeds() {
    let call_url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcointelegraph.com%2Frss%2Ftag%2F${this.props.chosenCryptoName}&api_key=q9cayrt4ahrde14ijfdelmhwmlw7odstwermcwqh&count=30`
    fetch(call_url)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({feeds: responseData.items});
    })
    .catch((error) => {
      console.log('Error getting feed.', error)
    })
  }

  render() {
    return (
      <div className="App">
        <FeedList feeds={
                    this.state.feeds.filter(
                      (feed) => feed.title
                    )
                  }
        />  
      </div>
    );
  }
}

export default Feed;