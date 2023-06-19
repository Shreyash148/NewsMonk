import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <div style={{height:'50px'}}></div>
      <Routes>
        <Route exact path='/entertainment' element={<News key="entertainment" size={5} country="us" category="entertainment"/>}/>
        <Route exact path='/science' element={<News key="science" size={5} country="us" category="science" />}/>
        <Route exact path='/sports' element={<News key="sports" size={5} country="us" category="sports" />}/>
        <Route exact path='/health' element={<News key="health" size={5} country="us" category="health" />}/>
        <Route exact path='/technology' element={<News key="technology" size={5} country="us" category="technology" />}/>
        <Route exact path='/business' element={<News key="business" size={5} country="us" category="business" />}/>
        <Route exact path='/' element={<News key="general" size={5} country="us" category="general" />}/>
      </Routes>
      </Router>
      </>
    )
  }
}

export default App
