import React, { Component } from 'react';
import './App.css';
import course from "./course.json";
import Chapter from "./Chapter";
import Controls from "./Controls"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {article: 16}
  }

  previousArticle = () => { this.changeArticle(-1) }
  nextArticle = () => { this.changeArticle(1) }

  changeArticle(number) {
    const next = this.state.article + number 
    this.setState({article: next})
  }

  rank() {
    if (this.state.article === 0) {
      return "first"
    } else if (this.state.article === course.chapters.length - 1 ) {
      return "last"
    } else {
      return "other"
    }
  }

  infoMenu() {
    const {chapters} = course

    return chapters.map( (chapter, index) => ({
      rank : chapter.titles.length-1,
      title : chapter.titles[chapter.titles.length-1],
      index : index
    }))
  }

  selectArticle = (e) => { this.setState({article: parseInt(e.target.value)})}

  render() {
    const {title, chapters} = course;
    const current = this.state.article;
    const elm = chapters[current];
    const control = <Controls
          previous = {this.previousArticle}
          next = {this.nextArticle}
          rank = {this.rank()}
          menu = {this.infoMenu()}
          currentArticle = {current}
          changeOption = {this.selectArticle}
        />
    
    return (
      <div className="container">
        <h1 className="text-center">{title}</h1>
        {control}
        <Chapter elm={elm} />
        {control}
      </div>
    )
  }
}

export default App;
