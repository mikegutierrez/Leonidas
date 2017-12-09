import React, { Component } from 'react';
import { render } from 'react-dom';
import NewsBox from './NewsBox.jsx';


class NewsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {articles:[]}
  }
  componentWillMount() {
    //google is hardcoded
    this.props.handleExpand('google')
    .then(json => {
      this.setState({articles:json.articles.slice(0, 3)})
    })
  }
  render() {
    return (
      <div className="news-tab">
        {this.state.articles.map((obj, i) => {
          return (<NewsBox
            key = {i}
            title = {obj.title}
            source = {obj.source.name}
            author = {obj.author}
            url = {obj.url}
            urlToImage = {obj.urlToImage}
          />)
        })}
      </div>
    )
  }
}

export default NewsTab;