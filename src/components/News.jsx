import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  

  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      loading:false
    };
  }

async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=64bfa38a26824e73b6b802fccab1a335&page=1&pageSize=${this.props.pageSize}` ;
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData=await data.json();
    this.setState(
        {articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false
        })

    }
   
    handlePrevClick=async()=> {
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=64bfa38a26824e73b6b802fccab1a335&page=${this.state.page -1}&pageSize=${this.props.pageSize}` ;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData=await data.json();

      this.setState(
          {articles:parsedData.articles,
            page:this.state.page -1,
            loading:false
          }) 
    }
    handleNextClick=async()=> {
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=64bfa38a26824e73b6b802fccab1a335&page=${this.state.page +1}&pageSize=${this.props.pageSize}` ;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData=await data.json();
      this.setState(
          {articles:parsedData.articles,
            page:this.state.page +1,
            loading:false
          })
    
  }

  render()
   {
    return (
      <div className="container my-3">
        <h1 className="my-3 explore">Explore</h1>
        <p className="explore p1">Get a comprehensive view of top stories and headlines</p>
        {this.state.loading && <Spinner/>}     
        <div className="row">
          {!this.state.loading && this.state.articles.map((article) => {
            return (
              <div className="col-md-4 my-3" key={article.url}>
                <NewsItem
                  title={article.title?article.title.slice(0,):""}
                  // description={article.description?article.description.slice(0,88):""}
                  img={article.urlToImage}
                newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container newsbtn d-flex justify-content-center">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" style={{marginRight:"12px"}} onClick={this.handlePrevClick}>&#8592;Previous</button>
        <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&#8594;</button>
        </div>
      </div>
    );
  }
}
