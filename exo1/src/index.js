import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        Amazing Calculator
      </div>
    );
  }
}

ReactDom.render(
  <Calculator />,
  document.getElementById('app')
);
