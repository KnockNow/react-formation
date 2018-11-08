import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Case extends React.Component {
  render () {
    const { children, ...rest } = this.props;
    return (
      <div className="case" {...rest}>
        {children}
      </div>
    )
  }
}

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
  constructor(props) {
    super(props);
    this.state = {
      results: 0,
      operations: []
    }
  }
  render() {
    const { operations } = this.state;
    return (
      <div className="calculator">
        <Results>{operations.join('')}</Results>
        <div className="cases">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((c) => <Case key={c}>{c}</Case>)}
          <Case>=</Case>
        </div>
        <div className="cases operations">
          {['/', '*', '-', '+'].map((c) => <Case key={c}>{c}</Case>)}
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <Calculator />,
  document.getElementById('app')
);
