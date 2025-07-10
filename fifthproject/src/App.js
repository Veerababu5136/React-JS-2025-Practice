/*

- when we want to use any functional-component,class-component,css-files,other any in other-page/file we need to export that componet

- That exported component can use, if imported only

- export is a keyword where we use to export a component

- exporting a component in 2-ways

- first one is default export : 

  - a defaulty exported component, can import in any name

- second one is named export

 - named exported component should import and use in same name exported in exporting time

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- import is mandatory to use an exported component

- we can import only exported component

- import is a keyword for importinmg components

syntax : import component_name from path

- and imported_component_name should only use to use that component

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Note : 

- a file can have n-named exports, but only 1-default export 

- a named export can rename using as in import


*/

import Menus from "./components/Header/header";

import { Footer as FooterBar} from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      kjkdfkjc

      <Menus></Menus>

      <FooterBar></FooterBar>

    </div>
  );
}

export default App;
