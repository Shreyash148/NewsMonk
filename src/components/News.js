import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps={
    country:'us',
    category:'general',
    size:5
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string,
    size: PropTypes.number
  }
  constructor(){
    super();
    this.state = {
      articles:[],
      loading:true,
      page:1,
      totalArticles:0
    }
  }
  async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac0750a295fa458ab0fc7488d1a4af13&page=${this.state.page}&pageSize=${this.props.size}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      page: this.state.page + 1,
      loading:false
    })
  }
  async componentDidMount(){
    this.updateNews();
  }
  fetchMoreData = async()=>{
    this.setState({page : this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac0750a295fa458ab0fc7488d1a4af13&page=${this.state.page}&pageSize=${this.props.size}`;
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
    })
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className='text-center'>Top headlines </h2>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              { this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3 card-group" key={element.url}>
                <NewsItems img={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
                </div>
              })}
               { 
              }
            </div>
            </div> 
            </InfiniteScroll>
        </div>
    </>
    )
  }
}

export default News