import React from 'react';

export const Modal = (props) => {
  return (
    <div id="info-modal-wrapper">
      <div id="info-modal">
        <button id="info-modal-close" onClick={props.closeModal}>&times;</button>
        <div id="info-modal-text">
          <h3>/Info/</h3>
          <p>
            Welcome to <i>time absorbs the feelings it produces</i> 
          </p>
          <p>
            This project has been created between the unceded lands of Kulin Nation and a (re-)colonised city, hosted on a server located in another former colony. We acknowledge the survival of First Nations people and those who have lost their homeland across the oceans, and acknowledge that the impact of colonisation is ongoing and interconnected.
          </p>
          <p>
            This is a generative experience suitable for both mobile and desktop. We recommend you to try both. 
          </p>
          <p>
            You are invited to <u>tap</u> on the floating emojis to activate content. 
            A set of content will be randomly selected with each refresh. 
            Each time it proposes a different narrative.
          </p>
          <p>
            Remembering is only the first act.
          </p>
          <p id="info-modal-credits">
            / <br />
            created by Nikki Lam <br />
            code: Patrick Hase <br />
            edit: Al Chan <br />
            / <br /><br />
            Commissioned for Arts House Makeshift Publics 2021
          </p>
        </div>        
      </div>
    </div>
  )
};