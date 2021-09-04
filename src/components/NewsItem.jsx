import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description,img,newsUrl} = this.props;
    return (
      <div>
        
        <div className="card" style={{width: "18rem"}}>
          <img src={!img?"https://i.gadgets360cdn.com/large/apple_reuters_1601009563406.jpg":img} className="card-img-top" style={{height:"150px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
