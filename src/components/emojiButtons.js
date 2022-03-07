import React, { useEffect } from 'react';

export default function EmojiButtons(props) {

  useEffect(() => {
    for(let i = 0; i < props.buttonList.length; i++){
      floatButton(document.getElementById("emoji-button-"+i));
    }
  }, []);

  const emojiButtonElements = props.buttonList.map((content) => 
  <button 
    key={content.id}
    id={"emoji-button-"+content.id}
    className="EmojiButton"
    style={props.transformList[content.id]}
    onClick={() =>{props.generateStoryPost(content.id)}} />
  );
    return (
      <div id="emoji-button-wrapper">
        {emojiButtonElements}
      </div>
    )
}

function makeNewPoistion(){
  let newX = Math.floor(Math.random() * window.innerWidth);
  let newY = Math.floor(Math.random() * window.innerHeight);
  return [newX, newY];
}

function velocity(prev, next){
  let x = Math.abs(prev[0] - next[0]);
  let y = Math.abs(prev[1] - next[1]);
  let larger = x>y ? x:y;
  /* 0.1 is mod */
  let speed = Math.ceil(larger/0.04);
  return speed;
}

function floatButton(target){
  let newPos = makeNewPoistion();
  let oldTop = target.offsetTop;
  let oldLeft = target.offsetLeft;
  target.animate([
    {top: oldTop+"px", left: oldLeft+"px"},
    {top: newPos[1]+"px", left: newPos[0]+"px"}
    ], {
      duration: velocity([oldTop, oldLeft], newPos),
      fill: "forwards"
    }).onfinish = function(){
      floatButton(target);
    }
}
