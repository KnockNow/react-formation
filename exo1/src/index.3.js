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
    this.calculate = this.calculate.bind(this);
    this.addOperation = this.addOperation.bind(this);
  }
  calculate() {
    this.setState({
      operations: [Math.fround(eval(this.state.operations.join('')))]
    })
  }
  addOperation(op) {
    this.setState({
      operations: this.state.operations.concat(op)
    });
  }
  render() {
    return (
      <div className="calculette">
        <Resultat>{this.state.operations.join('')}</Resultat>
        <div className="cases">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((c) => <Case key={c} onClick={() => this.addOperation(c)}>{c}</Case>)}
          <Case onClick={this.calculate}>=</Case>
        </div>
        <div className="cases operations">
          {['/', '*', '-', '+'].map((c) => <Case key={c} onClick={() => this.addOperation(c)}>{c}</Case>)}
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <Calculette />,
  document.getElementById('app')
);