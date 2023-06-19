import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,img,url}=this.props
    return (
        <>
        <div className="card bg-info-subtle border border-primary-subtle rounded-3" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-info-subtle" style={{border:"none"}}>
            <a href={url} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
        </div>
        </div>
    </>
    )
  }
}

export default NewsItems