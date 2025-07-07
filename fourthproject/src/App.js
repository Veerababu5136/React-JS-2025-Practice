/*

- component based development code reduces,we write single time and call with different data/args

- componet is combination (html+css+js)

- component is developed in  2-ways

1. using functions

- the components which developed using functions are called functional component

- functional componnets lighter and faster

- most used/preferable


2. using class

- the components which are developed using class known as class components

- it requires render() to return component

- it required Component class/lib to develop a class component

- cons are increasing code, and less preferable



*/
import './App.css';

import Header from './components/Header/Header.js'; //.js added by react

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Header/>
    </div>
  );
}

export default App;
