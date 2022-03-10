import React, { Component } from 'react';
import './App.css';
import BGAnim from './components/bgAnim';
import EmojiButtons from './components/emojiButtons';
import { Modal } from './components/modal';
import { orderedContentList } from './content/contentObject';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mobile: window.matchMedia('all and (any-hover: none)').matches,
      emojiButtonTransforms: this.generateEmojiButtonTransforms(window.matchMedia('all and (any-hover: none)').matches),
      modalIsOpen: false
    };
  }
  render() {
    return (
      <div id="page-wrapper">
        {this.state.modalIsOpen && 
          <Modal
            closeModal={this.closeModal.bind(this)} />
        }
        <BGAnim />
        <div id="story-display-wrapper" />
        <EmojiButtons
          /* change to array length */
          buttonList={orderedContentList} 
          transformList={this.state.emojiButtonTransforms} 
          generateStoryPost={this.generateStoryPost.bind(this)}
          mobile={this.state.mobile}
          />
        <button id="info-modal-button" onClick={() => {this.setState({ modalIsOpen: true })}}>
          <span id="info-modal-button-text">/info/</span>
          {/* <img id="info-modal-button-bg" src={require("./content/_other/black-heart.png")} /> */}
        </button>
      </div>
    )
  }
  closeModal(){
    this.setState({ modalIsOpen: false })
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
      this.ghostButton(id);
    } else if (newPost.display === "txt"){
      let newTextPost = document.createElement('span');
      console.log(newPost.text);
      newTextPost.innerHTML = newPost.text;
      newTextPost.classList.add("TextPost");
      document.getElementById("story-display-wrapper").prepend(newTextPost);
      this.ghostButton(id);
    }
  }
  ghostButton(id){
    let thisButton = document.getElementById("emoji-button-"+id);
    //scale and opacity in a requestanimationframe loop? expand scale?
    let start, previousTimeStamp;
    let done = false;
    let animLength = 500;

    function ghosting(timestamp) {
      if (start === undefined) { start = timestamp; }
      const elapsed = timestamp - start;
      if (previousTimeStamp !== timestamp) {
        const ramp = elapsed/animLength;
        thisButton.style.opacity = 1 - ramp;
        thisButton.style.scale = 1 + ramp;
        if (ramp >= 1){
          thisButton.remove();
          done = true;          
        }
      }
      if (elapsed < animLength) { // Stop the animation after 2 seconds
        previousTimeStamp = timestamp;
        !done && window.requestAnimationFrame(ghosting);
      }
    }
    window.requestAnimationFrame(ghosting);    
  }

  randomNum = (min, max) => Math.random() * (max - min) + min;
}

export default App
