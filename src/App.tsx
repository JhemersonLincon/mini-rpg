import React from 'react';
import * as C from './App.styles';
import useCharacter from './Hooks/useCharacter';
import Character from './components/Character/Character';
import { GlobalStyles } from './GlobalStyles';
const App = () =>{
  const char = useCharacter('person');

  React.useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown)
  },[]);

  const handleKeyDown = (e:KeyboardEvent) => {
    switch(e.code){
      case'KeyA':
      case'ArrowLeft':
        char.moveLeft();
      break;
      case'KeyW':
      case'ArrowUp':
        char.moveUp();
      break;
      
      case'KeyD':
      case'ArrowRight':
        char.moveRight();
      break;

      case'KeyS':
      case'ArrowDown':
        char.moveDown();
      break;
    };
  };

  return(
    <>
      <GlobalStyles/>
      <C.Container>
        <C.Map>
          <Character x={char.x} y={char.y} side={char.side} name={char.name}/>
        </C.Map>

      </C.Container>
    </>
  )
}

export default App;
