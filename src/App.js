import React, { Component } from 'react';
import './App.css';
import BGAnim from './components/bgAnim';
import EmojiButtons from './components/emojiButtons';
import { orderedContentList } from './content/contentObject';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobile: window.matchMedia('all and (any-hover: none)').matches,
      emojiButtonTransforms: this.generateEmojiButtonTransforms(window.matchMedia('all and (any-hover: none)').matches)
    };
  }
  render() {
    return (
      <div id="page-wrapper">
        <BGAnim />
        <div id="story-display-wrapper" />
        <EmojiButtons
          /* change to array length */
          buttonList={orderedContentList} 
          transformList={this.state.emojiButtonTransforms} 
          generateStoryPost={this.generateStoryPost.bind(this)}
          />
      </div>
    )
  }
  generateEmojiButtonTransforms(mobile){
    let transformList = [];
    if(mobile){
      for (let i = 0; i < orderedContentList.length; i++){      
        /* this is the range of button sizes */
        let size = this.randomNum(3,8);
        let leftPos = this.randomNum(0,(100-size));
        let topPos = this.randomNum(0,100);
        let transform = {
          width: size+"vh",
          height: size+"vh",
          left: leftPos + "%",
          top: "max(0%, calc("+topPos+"% - "+size+"vh))"
        };
        transformList.push(transform);
      }
    } else {
      for (let i = 0; i < orderedContentList.length; i++){      
        /* this is the range of button sizes */
        let size = this.randomNum(1,8);
        let leftPos = this.randomNum(0,(100-size));
        let topPos = this.randomNum(0,100);
        let transform = {
          width: size+"vw",
          height: size+"vw",
          left: leftPos + "%",
          top: "max(0%, calc("+topPos+"% - "+size+"vw))"
        };
        transformList.push(transform);
      }
    }    
    return transformList
  }
  generateStoryPost(id){
    let newPost = orderedContentList[id];
    /* check if img or text */
    if (newPost.display === "img"){
      let newImagePost = document.createElement('img');
      newImagePost.src = newPost.src;
      newImagePost.alt = newPost.alt;
      newImagePost.classList.add("ImagePost");
      document.getElementById("story-display-wrapper").prepend(newImagePost);
    } else if (newPost.display === "txt"){
      let newTextPost = document.createElement('span');
      console.log(newPost.text);
      newTextPost.innerHTML = newPost.text;
      newTextPost.classList.add("TextPost");
      document.getElementById("story-display-wrapper").prepend(newTextPost);
    }
  }

  randomNum = (min, max) => Math.random() * (max - min) + min;
}

export default App
