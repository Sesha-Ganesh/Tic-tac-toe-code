import React from 'react';
import Game from './Game';
import './index.css';

const App = () => {
   return (
      <div className='app'>
         <div className='title'>Tic Tac Toe </div>
         <Game />
         <div className='footer'>Developed by Sesha Ganesh S</div>
      </div>
   );
};

export default App;
