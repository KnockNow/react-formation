import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import createStore from './configureStore';
import { addOperationAction } from './actions';
import './style.css';

const store = createStore();

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
    }
    this.calculate = this.calculate.bind(this);
  }
  calculate() {
    // implementer calculate avec redux
  }
  render() {
    const { operations, addOperation } = this.props;
    return (
      <div className="calculette">
        <Resultat>{operations.join('')}</Resultat>
        <div className="cases">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((c) => <Case key={c} onClick={() => addOperation(c)}>{c}</Case>)}
          <Case onClick={this.calculate}>=</Case>
        </div>
        <div className="cases operations">
          {['/', '*', '-', '+'].map((c) => <Case key={c} onClick={() => addOperation(c)}>{c}</Case>)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addOperation: (c) => dispatch(addOperationAction(c)),
});

const mapStateToProps = (state) => (console.log({state}), {
  operations: state.app.operations,
});

const ReduxCalculette = connect(mapStateToProps, mapDispatchToProps)(Calculette);

ReactDom.render(
  <Provider store={store}><ReduxCalculette /></Provider>,
  document.getElementById('app')
);