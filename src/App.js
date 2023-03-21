import "./App.css";
import { useState } from "react";

function App() {
  const [fieldIndex,setFieldIndex] = useState(0);
  const handleKeyUp=(event)=>
  {
    const input = event.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";
    if(input.nextElementSibling!==null && isValidInput){
      input.nextElementSibling.focus();
      setFieldIndex(fieldIndex+1)
    }
    if(event.key === "Backspace" && input.previousElementSibling !==null){
      input.previousElementSibling.focus();
      setFieldIndex(fieldIndex-1)
    } 
    if(fieldIndex === 5 && isValidInput){
      submit()
    }
  }

  const handlePaste = (event) =>{
    const data = event.clipboardData.getData("text");
    const value = data.split("");
    let input = event.target
    while(input.previousElementSibling !==null) 
    {
      input=input.previousElementSibling
    }

    if (value.length === 6) {
      let count = 0;
      while(input !== null){
        input.value= value[count]
        input = input.nextElementSibling;
        count++;
      }
      submit()
    }
  }

  const submit = ()=>{
    console.log("Form is submitted!")
  }
  return (
    <div className="App">
      <h1>Enter OTP</h1>
      <div className="otp-field">
        <input type="text" maxLength="1" onKeyUp={handleKeyUp} onPaste={handlePaste}/>
        <input type="text" maxLength="1" onKeyUp={handleKeyUp} onPaste={handlePaste} />
        <input className="space" type="text" maxLength="1" onKeyUp={handleKeyUp} onPaste={handlePaste} />
        <input type="text" maxLength="1" onKeyUp={handleKeyUp} onPaste={handlePaste} />
        <input type="text" maxLength="1" onKeyUp={handleKeyUp} onPaste={handlePaste} />
        <input type="text" maxLength="1" onKeyUp={handleKeyUp} onPaste={handlePaste} />
      </div>
    </div>
  );
}

export default App;
