import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message />
     {/*<Greet></Greet>    ctrl c k */}
      {/* <Welcome /> */}
      <Greet name="Bruce" heroName="Batman">
        <p>This is inner props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>OK</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
    </div>
    
  );
}

export default App;
