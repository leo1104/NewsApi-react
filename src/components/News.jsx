import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  

  constructor() {
    super();
    this.state = {
      articles: [],
      page:1
    };
  }

async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=64bfa38a26824e73b6b802fccab1a335&page=${this.state.page}` ;
    let data = await fetch(url)
    let parsedData=await data.json();
    this.setState(
        {articles:parsedData.articles,
        })

    }
   
    handlePrevClick=()=> {
       this.setState({
           page:this.state.page -1
       }) 
    }
    handleNextClick=()=> {
        this.setState({
            page:this.state.page + 1
        })
    }

  render()
   {
    return (
      <div className="container my-3">
        <h2>NewsMonkey -Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4 my-3" key={article.url}>
                <NewsItem
                  title={article.title?article.title.slice(0,45):""}
                  description={article.description?article.description.slice(0,88):""}
                  img={article.urlToImage}
                newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&#8592;Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next&#8594;</button>
        </div>
      </div>
    );
  }
}
