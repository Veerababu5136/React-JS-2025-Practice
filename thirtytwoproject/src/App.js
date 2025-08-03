/*
========================================================================================================================================
                                                        Veera React Forms – Notes
========================================================================================================================================


What is a Form?

- A form is an HTML structure that collects user input.

- It includes fields like input, textarea, checkbox, radio, etc.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

What is Form Handling?

- Form handling means managing user input:

  - Capturing data entered into fields

  - Validating input values

  - Responding to submit events/processing



--------------------------------------------------------------------------------------------------------------------------------------------------------------------


What is Validation?

- Validation ensures that the input data is correct and complete before processing.

- Types:

  1. Required Field Check

  2. Format Check (e.g., email format)

  3. Length, Pattern, Custom Logic

============================================================================================================================================================================================================


Controlled Components
--------------------------------------------
- Input elements are tied directly to React state using useState.

- Every input's value is stored in state and updated via onChange.

- Full control over form values.


Example:

  const [name, setName] = useState("");

  <input value={name} onChange={(e) => setName(e.target.value)} />

Benefits:

- Real-time validation

- Dynamic behavior (e.g., disabling buttons)

- Easily resettable and manageable

============================================================================================================================================================================================================


Uncontrolled Components
--------------------------------------------

- Input elements store their own state/input-tag in the DOM.

- You access values using useRef (like traditional JS).

- React is not aware of the value until you fetch it/submitting the form.


Example:
  const nameRef = useRef();
  <input ref={nameRef} />
  console.log(nameRef.current.value);

Use When:
- You want quick, simple forms without much validation
- You don't need real-time state sync

============================================================================================================================================================================================================

Controlled vs Uncontrolled – Key Differences

| Feature              | Controlled                | Uncontrolled              |
|---------------------|---------------------------|---------------------------|
| State Management     | React useState            | DOM via useRef            |
| onChange Handling    | Required                  | Not required              |
| Real-time Validation | Easy                      | Manual                    |
| Performance          | Slightly more expensive   | Slightly better for large forms |
| Form Reset           | Very easy                 | Needs manual ref reset    |

============================================================================================================================================================================================================


*/

import { useRef, useState } from "react";

/*

- forms is a source to collect data from end-user/customer and transfer for processing

- ex : login page--->username,pwd----->

validation  in 2-ways

- (is username,pwd entered) --------------> front-end-side , no processing (processing means data going to db for verification/validation)

- (is username,pwd entered exists in db or not) ------>back-end-side--->here processing occurs

 validation


 - form-handling : 

  - capture data from user

  - validate/form-validation it before processing

  - form-validation : checking data format, before sending to processing

  - (is username,pwd entered) --------------> front-end-side , no processing (processing means data going to db for verification/validation)


  - forms : defination

  - form-handling , form-validation

  - form-handling in 2-ways 

  1. controlled-way

  2. un-controlled-way


*/



// uncontrolled-way : useRef()
function App() 
{

//form-inputs

const nameRef=useRef("");
const pwdref=useRef("");


  //errors
  const [nameError,setNameError]=useState("")

  const [pwdError,setPwdError]=useState("")



  function validation()
  {

    var isValid=false;

    // console.log(nameRef.current)

    var name=nameRef.current.value;

    var pwd=pwdref.current.value;


    if(name.length===0)
    {
      setNameError("username should not be empty")
      isValid=true
    }
    else if(name.length<6)
    {
      setNameError("username should not be <6 characteres")
      isValid=true
    }
    else
    {
      setNameError("")

      isValid=false
    }



    if(pwd.length===0)
    {
      setPwdError("password should not be empty")
            isValid=true

    }
    else if(pwd.length<6)
    {
      setPwdError("pwd should not be < 6 characters")
            isValid=true

    }
    else if(pwd.length>12)
    {
      setPwdError("pwd should not be > 12 characters")
            isValid=true

    }
    else
    {
      setPwdError("")
            isValid=false

    }

return isValid
  }

  function handleFormSubmit(e)
  {

    e.preventDefault();


    if(validation())
    {
      console.log("erros...")
    }
    else
    {
      console.log("form-submitedd.............")
    }

    

  }


  return (
    <div className="App">

      <form onSubmit={handleFormSubmit}>


        <input type="text" ref={nameRef} id="username"/> <br></br>

        <span style={{color:"red"}}>{nameError}</span> <br></br><br></br>


         <input type="password" ref={pwdref} id="password"/> <br></br>

        <span style={{color:"red"}}>{pwdError}</span> <br></br><br></br>


        <button type="submit">Submit</button>


      </form>
     
    </div>
  );
}

export default App;
