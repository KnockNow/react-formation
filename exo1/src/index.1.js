import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

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
  render() {
    return (
      <div className="calculette">
        <Resultat>0</Resultat>
      </div>
    );
  }
}

ReactDom.render(
  <Calculette />,
  document.getElementById('app')
);