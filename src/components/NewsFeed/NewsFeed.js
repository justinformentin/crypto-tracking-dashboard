import React, { Component } from 'react';


class NewsFeed extends Component {
  render() {
  return(
      <div className="news__reddit-item">
        <div className="news__reddit-item-content">
          <div className="news__reddit-item-content--top">
            <a href={this.props.link} target="_blank">
              <img 
                className="news__reddit-item-thumbnail" 
                href={this.props.link} 
                src={this.props.thumbnail}
                alt="News Thumbnail"
              />
            </a>
            <a className="news__reddit-item-title-text" href={this.props.link} target="_blank">
              {this.props.title.length > 100
                ? `${this.props.title.substring(0, 100)}...`
                : this.props.title}
            </a>
          </div>
        </div>
      </div>    
    )
  }
}

export default NewsFeed;