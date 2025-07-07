/*

- component based development code reduces,we write single time and call with different data/args

- componet is combination (html+css+js)

- component is developed in  2-ways

1. using functions

- the components which developed using functions are called functional component

- functional componnets lighter and faster

- most used/preferable


2. using class



*/

import './App.css';

import Header from './components/header/Header'; // .js to Header will be added by react

function App() {
  return (
    <div className="App">

      <Header/>

      <Header/>

    
    </div>
  );
}

export default App;
