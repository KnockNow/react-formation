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

class Resultat extends React.Component {
  render () {
    const { children, ...rest } = this.props;
    return (
      <div className="resultat" {...rest}>
        {children}
      </div>
    )
  }
}

class Calculette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultat: 0,
      operations: []
    }
  }
  render() {
    return (
      <div className="calculette">
        <Resultat>{this.state.operations.join('')}</Resultat>
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
  <Calculette />,
  document.getElementById('app')
);