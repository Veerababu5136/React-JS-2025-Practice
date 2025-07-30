import { useRef } from "react";

function App() {
  

  const headings=useRef([])

  console.log(headings)

  return (
    <div>
     
    <h1 ref={(ele)=>(headings.current[0]=ele)} onClick={
      ()=>{

        // console.log(heading)
        //         console.log(heading.current)

       headings.current[0].innerText="i am supraja peri changed using dom-mainpulation using useRef"

       headings.current[0].style="background:green"

                                // console.log(heading.current)


      }
      }>i am h1 using ref</h1>


        <h1 ref={(ele)=>(headings.current[1]=ele)} onClick={
      ()=>{

        // console.log(heading)
        //         console.log(heading.current)

       headings.current[1].innerText="i am amrutha pavani changed using dom-mainpulation using useRef"

       headings.current[1].style="background:blue"

                                // console.log(heading.current)


      }
      }>i am h1 using ref</h1>


  <h1 ref={(ele)=>(headings.current[2]=ele)} onClick={
      ()=>{

        // console.log(heading)
        //         console.log(heading.current)

       headings.current[2].innerText="i am Sowjanya/chinni changed using dom-mainpulation using useRef"

       headings.current[2].style="background:yellow"

                                // console.log(heading.current)


      }
      }>i am h1 using ref</h1>


     {  console.log(headings)}
    </div>
  );
}

export default App;
