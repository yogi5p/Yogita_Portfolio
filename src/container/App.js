import React, { Component } from 'react';
import Intro from '../components/Intro/Intro';
import Knowhow from '../components/Knowhow/knowhow';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/contact';

class App extends Component {
  state = {
    showDiv: false
}

  render() {
    const { showDiv } = this.state;
    return (
      <div className="App">
        <Intro />
        <Knowhow />
        { showDiv && (
        <Experience  />
        )}
        <button className="f3 flex grow no-underline br-pill bg-transparent b--dark-green code ba mt5 bw1 ph3 pv2 mv5 center dark-green" onClick={() => this.setState({ showDiv: !showDiv })}>Check Out My Portfolio</button>
        <Contact />
      </div>
    );
  }
}

export default App;
