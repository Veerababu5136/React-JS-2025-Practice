import React from 'react'

import './Footer.css'

function Footer(props) {

    /*


    - applying styles using externl-css, we can follow html-css syntax 


    - we can use margin-top direcly instead of marginTop. 

    - reason : because we are writing css in .css  file, not in .js file

    . js file requires jsx, so we write as js-objcets

    but .css file is not requires jsx, so we can apply normally



    .css/external-css file does not require export to use, but it requires import by following syntax

    import 'path'



    */
  return (
    /*


    props.className=
    
{

    color:yellow;

    background-color: green;

}-- came from app.module.css

    */
    <div className='footer'> 
      <footer className={props.className}>
        2025 &copy; Supraja Peri
      </footer>
    </div>
  )
}

export default Footer
