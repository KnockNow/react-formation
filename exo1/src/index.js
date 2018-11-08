import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Calculette extends React.Component {
  render() {
    return (
      <div className="calculette">
        Ma calculette
      </div>
    );
  }
}

ReactDom.render(
  <Calculette />,
  document.getElementById('app')
);