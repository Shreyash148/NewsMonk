import React, { Component } from 'react'
import load from './load.gif'

export class Spinner extends Component {
  render() {
    return (
      <>
      <div className='text-center'>
        <img src={load} alt="load"/>
      </div>
      </>
    )
  }
}

export default Spinner