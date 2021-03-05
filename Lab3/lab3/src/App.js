import React from 'react';
import Homepage from './components/homepage';
import Image from './components/image';
import Body from './components/body';
import cat from './pumpkin.png';
import './myStyles.css';

function App() {
  //constants to define my name and my cats name
  const fname = 'Taylor';
  const cname = 'Pumpkin'
  //function to handle the boop alert
  function boop() {
    alert('boop');
  }

//plugging in the values for each of the componenets
  return (
    <body>
      <div>
        <Homepage firstName = {fname}/>
        <Image catimage = {cat} catboop={boop}/>
        <Body catname = {cname}/>
      </div>
    </body>
    )
}

export default App;
