import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddScreen from './AddScreen';
import ChooseScreen from './ChooseScreen';
import axios from 'axios';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          cards: [],
          fact: '...',
      };
  }

  componentDidMount(){
    axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(res => {
      this.setState({fact: res.data.text})
    })
  }

  addScreen = () => {
    return (
      <Fragment>
        <AddScreen cards={this.state.cards} fact={this.state.fact}/>
      </Fragment>
    )
  }

  chooseScreen = () => {
    return (
      <Fragment>
        <ChooseScreen cards={this.state.cards} fact={this.state.fact}/>
      </Fragment>
    )
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={this.addScreen} /> 
          <Route exact path='/choose' render={this.chooseScreen} /> 
        </Switch>
      </Router>
    );
  }

}

export default App;
