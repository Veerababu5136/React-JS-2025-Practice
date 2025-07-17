/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                          Styling in React.js
--------------------------------------------------------------------------------------------------------------------------------------------------------

React allows multiple ways to apply styles:

1. Inline Styling
   - Defined as a JavaScript object
   - Applied with: style={styleObject}
   - Uses camelCase for properties (e.g., backgroundColor)

2. CSS Stylesheet (Global)
   - Write CSS in a separate `.css` file
   - Import it into your component: `import './App.css'`
   - Apply styles using `className="className"`

3. CSS Modules
   - Uses `.module.css` file
   - Class names are scoped to the component
   - Import like: `import styles from './App.module.css'`
   - Use with: `className={styles.className}`

--------------------------------------------------------------------------------------------------------------------------------------------------------
The examples below demonstrate each method.
--------------------------------------------------------------------------------------------------------------------------------------------------------
*/



/*

css- ways

3- ways

1.inline

2.internal

3.external

*/

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer className={styles.Hero}></Footer>
    </div>
  );
}

export default App;
