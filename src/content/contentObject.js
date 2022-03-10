let rawContentList = [
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/cat-on-fire-sitting.gif"),
    "alt": "A white cat with long fur is on fire. Cat is still resting as if nothing is happening."
  },
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/chaos-is-a-ladder.gif"),
    "alt": "Scene from Game of Thrones where the character Littlefinger said ‘Chaos is a ladder’"
  },
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/high-pitched-screaming.jpg"),
    "alt": "Image of a cat seemingly screaming. With captions reads [high pitched screaming]"
  },
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/matrix-blue-pills.gif"),
    "alt": "Scene from Matrix 4: Resurrections. A handful of blue pills dropping into the sink."
  },
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/neon-genesis.gif"),
    "alt": "Scene from Neon Genesis: Evangelion. A light skinned figure against a dark background. A pair of wings extend from the figure. Captions read: &gt; IT ALL RETURNS TO NOTHING. Shadow of a planet above the figure."
  },
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/now.jpg"),
    "alt": "text of the word now"
  },
  {
    "display": "img",
    "type": "image",
    "src": require("./_images/train-to-busan.gif"),
    "alt": "Scene from Train to Busan. A group of zombies are attacking a glass door on a tran carriage. A few humans looked at them from the other side of the glass, startled."
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/let-yourself-be-broken.png"),
    "alt": "text reading one way to make it through is to let yourself be broken"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/make-art.png"),
    "alt": "text reading make art"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/manage-it.jpg"),
    "alt": "text reading manage it"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/maybe-they-just-wanted-an-escape.png"),
    "alt": "text reading maybe they just wanted an escape"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/mercury-retrograde.png"),
    "alt": "text reading it must be mercury retrograde"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/namaste.png"),
    "alt": "text reading hold on to normalcy. Namaste"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/optimised-for-productivity.png"),
    "alt": "text reading you are optimised for productivity"
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/perpetual-loop.png"),
    "alt": "image of text reading "
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/promises-of-today.png"),
    "alt": "image of text reading "
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/ready-to-explode.png"),
    "alt": "image of text reading "
  },
  {
    "display": "img",
    "type": "affirmation",
    "src": require("./_affirmations/remember-everything.png"),
    "alt": "image of text reading "
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/empty.jpg"),
    "alt": "Interior of a closed restaurant with lines of fluorescent lighting. Red plastic stools are upside down resting on top of foldable tables. The image is grainy and green. "
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/moss.jpg"),
    "alt": "Abstract and close-up image of green and white fungus and algae under water forming soft and irregular shapes."
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/sky.jpg"),
    "alt": "Vertical image of a skyline in the distance, thin layer of ocean with cargos, an airport runway in front (beneath), and a cropped building in the foreground. Blue gradient sky is hazy, making it hard to see the mountain underneath it. The image is grainy."
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/smoke.jpg"),
    "alt": "Image of a park-like lawn with a few trees. Thick smoke or fog sweeping across the lawn. Sky behind it is soft pink with clouds covered by the grey hazy smoke."
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/tunnel.jpg"),
    "alt": "A wide shot of a sewage tunnel, with reflections of above ground in shallow water. The image is dark and grainy."
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/water.jpg"),
    "alt": "A dark image of shallow water with sprinkles of light on its ripples. Back of legs wearing light coloured gum boots in the middle right of the image."
  },
  {
    "display": "img",
    "type": "photo",
    "src": require("./_photos/windows.jpg"),
    "alt": "A vertical image of a line of old windows on a curved wall. A single fluorescent on the ceiling. Red tint of light on the windows that looks like a chemical response to the film it was shot on."
  },
  {
    "display": "txt",
    "type": "text",
    "text": `fresh air remains out of reach—forget sea breeze—even at a premium.
            <br />
            <br />
            Do not fear, there is always room in the algorithm.`
  },
  {
    "display": "txt",
    "type": "text",
    "text": `Thin yellow lasers held by tiny chromatic refractors formed a pathway. I was not alone. I was surrounded by many holographic blue fairies. Above us: a circular sky window. Beyond the glass: grey, flat, dull.
            <br />
            <br />
            ‘Please stay between the yellow lines,’ a gentle voice echoed across the marble floor.
            <br />
            <br />
            I followed between the yellow lines, zigzagging across the empty grand hall. Holographic figures appeared to lead the way. They were in smooth silver-blue gowns that shimmered. They wore matching FaceBubbles and protective contact lenses, as if non-human entities needed to shield from existential threats. Floating.
            <br />
            <br />
            The blue fairies hovered above me, maintaining a safe distance. I followed. The walk, cautiously managed by the fairies’ calm presence, was effective. They left no trace. No shadows, no memory.`
  },
  {
    "display": "txt",
    "type": "text",
    "text": `My double-walled windows made weird noises in the middle of the night. Wind, working against gravity, traveled up the vent. By the time the wind reached my window on the 165th floor, there was a gentle knock as if it was asking permission to enter. Its reach caused a slight contraction in the chromatic frame.`
    
  },
  {
    "display": "txt",
    "type": "text",
    "text": `The yearly allocation of liquid was determined by an algorithm, the same algorithm that manufactured and organised all that I must remember; <u>StreamLine Lyf</u>, a feed to assist with the prioritisation of my aspirations.
            <br />
            <br />
            From my bed I reached towards the wall dispenser above my feet. Numbers glowed in blue. My fingers rested on the black aluminium panel.  No-origin Caffe = 6; Nano H2O&gt; = 67; Multi-vitamins (dissolvable) = 24; Carbon-O = 119
            <br />
            <br />    
            I gave into my impulses. Ding! The black panel slid open. A canister of artificial coffee sat in a recess in the wall. It was warm to touch. I twisted open the lid. My senses awakened. I  remember differently when I act against the algorithm.`
  },
  {
    "display": "txt",
    "type": "text",
    "text": `I expected another feeling, reprise perhaps. My shoulders were tight, neck bent forward—this perpetual loop—I turned on my daily affirmations and returned to my breathing exercises.`
  },
  {
    "display": "txt",
    "type": "text",
    "text": `I could not remember for how long I had been running flat. Flat like the mid-tones outside my window. <u>Deluxe Seaview</u>, sky and sea and hilltops, blurred into smog. Squint and you might see dozens of cargos pushing through the narrow sea. Somewhere in the supply chain, stuff was still getting delivered.`
  },
  {
    "display": "txt",
    "type": "text",
    "text": `I tapped my fingers in the air and a translucent rectangle appeared at optimal reading distance. Shades of blue melting into each other. In my HearPods, a warm and gentle voice tells me I must stretch my shoulders, which have become stiff, because I am a side sleeper. Injury Risk must be mitigated.
            <br />
            <br />
            The daily affirmation streamed a GIF: I am dressed in a buttery mustard silk gown, standing at the top of a mountain, overlooking an ocean of treetops, against a blue sky. My arms sway—front and back, front and back. Between frames, a glitch and a tiny jump, limbs swinging. 
            <br />
            <br />    
            I smiled at myself. ‘You are an <u>abundance</u>,’ the voice echoed in my HearPods, sending soothing energy to the back of my neck and down my spine. 
            <br />
            <br />    
            This rainforest reminded me of birds. I tried to recall birdsong but could not. Perhaps that memory too had been erased—a result of incompatible optimisation.  
            <br />
            <br />    
            ‘Trust yourself and you will be free,’ arms swaying front and back, front and back. The GIF dissolved into an electric blue.`
  },
  {
    "display": "txt",
    "type": "text",
    "text": `The doors opened to <u>freedom</u>. They would open when the time was right.  
            <br />
            <br />
            I stepped into the green room and turned to find the holographic blue fairies were being absorbed by tiny drones. Once their task was complete, the fairies retracted into these devices. The hall behind me hollowed into a deeper shade of grey. Not quite an infinite void, just.
            <br />
            <br />    
            ’You have arrived. A new journey awaits,’ 
            <br />
            <br />    
            Today was going to be the day I finally remembered. I sit on the chromatic stool in front of the door, waiting. Beethoven’s ‘String Quintet in C Major’  fills the room. Today I will be let out of Management.`
  }
]

rawContentList.forEach((listing, index) => {
  listing.id = index;
});

export const orderedContentList = rawContentList;
/* export const orderedContentList = rawContentList.forEach((listing, index) => {
  listing.id = index;
}); */