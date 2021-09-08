import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title,img,newsUrl} = this.props;
    return (
      <div>
        
        <div className="card" style={{width: "18rem",padding:"12px",borderRadius:"16px"}}>
          <img src={!img?"https://i.gadgets360cdn.com/large/apple_reuters_1601009563406.jpg":img} className="card-img-top" style={{height:"164px",borderRadius:"8px"}} alt="..." />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            {/* <p className="card-text">{description}...
            </p> */}
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark" style={{margin:"12px 0",padding:".5rem"}}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
