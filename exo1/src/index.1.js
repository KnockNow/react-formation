import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Results extends React.Component {
  render () {
    const { children, ...rest } = this.props;
    return (
      <div className="results" {...rest}>
        {children}
      </div>
    )
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Results>0</Results>
      </div>
    );
  }
}

ReactDom.render(
  <Calculator />,
  document.getElementById('app')
);
