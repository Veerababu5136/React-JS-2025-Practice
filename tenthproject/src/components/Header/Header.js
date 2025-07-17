import React from 'react'


function Header() {

    //internal
    /*

    here in react, the css attribute style requires an js-object ton apply stylings

    - here since js-object, we need to modify key as camelcase

    - here in internal css , instead of style-tag in head-tag, we required an object in same .js (Header.js) file

    - margin-top-------------html

    - marginTop--------------jsx---inetrnally babel--------------margin-top

    background-color------babel--------------------------------backgroundColor





    inline : 


    - we use style- prop/attribute in tags directly and we create object directly there



    */


    //internal css
    var headerStyling={

        // background-color:"green"

        backgroundColor:"green",
        border:"10px solid black"

    }

  return (
    <div style={headerStyling}>
      <ul style={{color:"white",border:"5px solid yellow"}}>
        <li>Home</li>
        <li>User</li>
        <li>About</li>

      </ul>
    </div>
  )
}

export default Header
