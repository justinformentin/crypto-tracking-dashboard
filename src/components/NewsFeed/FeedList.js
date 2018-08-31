import React, { Component } from 'react';
import NewsFeed from './NewsFeed';


class FeedList extends Component {

  render() {
    let feeds = this.props.feeds.map((feed) => {
      return <NewsFeed key={feed.guid}
                   thumbnail={feed.thumbnail} 
                   title={feed.title}
                   link={feed.link} />
    });
    return (
      <div className="list">
        {feeds}
      </div>
    )
  };
}

export default FeedList;