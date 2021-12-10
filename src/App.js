import axios from 'axios';
//import { data } from 'msw/lib/types/context';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components';


const Head = styled.h1`
color: #ff9f1c;
font-family: 'Sigmar One', cursive;
font-size: 4rem;
font-family: 'Monoton', cursive;
margin: 0;
padding-bottom: 3rem;
grid-column: 1;
grid-row: 1;
z-index: 1;
text-transform: uppercase;
animation: glow 1s ease-in-out infinite alternate;


@keyframes glow {
    from {
      text-shadow: 0 0 20px #2d9da9;
    }
    to {
      text-shadow: 0 0 50px #34b3c1, 0 0 20px white;
    }
  }
`
const Names = styled.div`
margin-left: 23%;


`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [char, setChar] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
    console.log(res.data)
    setChar(res.data)
    })
    .catch(err => console.error(err)
    )
  }, []);

  return (
    <div className="App">
      
      <Head className="Header">Characters</Head>
      <Names>
      {char.map(charName => {
        return <Character name={charName.name}/>
      })}
      </Names>
      
    </div>
  );
}

export default App;
