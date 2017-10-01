import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './container/GameContainer.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <GameContainer />,
    document.getElementById('app')
  );
});