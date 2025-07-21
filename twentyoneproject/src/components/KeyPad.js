
function KeyPad(props) 
{

    console.log(props)

    const container={

        display:"grid",
        gridTemplateColumns:"repeat(4,60px)",
        gap:"10px",
        padding:"10px",
        justifyContent:"center"


    }


    const buttonStyling={

        padding:"15px",
        fontSize:"20px"

    }



    var buttonsArray=[
                      '7','8','9','*',
                      '4','5','6','-',
                      '1','2','3','+',
                      '/','0','C','='
                    ]
  return (
    <div style={container}>
      {/* <button>7</button> */}
        {
            buttonsArray.map(
                (b)=>(
                      
                    <button style={buttonStyling} onClick={
                        ()=>{
                            props.function1(b)
                        }
                    }>{b}</button>

                )
            )
        }
    </div>
  )
}

export default KeyPad
