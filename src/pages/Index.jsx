import React, { useState } from "react";
import backgroundImg from '../assets/images/back.jpg' 


const backgroundStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};


export default function Index() {
  const [input, setInput] = useState(""); 


  const handleClick = (event) => {
    const value = event.target.value;
    handleInput(value);
  };


  const handleKeyDown = (event) => {

    const allowedKeys = /[0-9%\/*\-+=\r\n]/;

    if (allowedKeys.test(event.key)) {
    
      event.preventDefault();
      handleInput(event.key);
    }
  };


  const handleInput = (value) => {
    switch (value) {
      case "=":
        calculateResult();
        break;
      case "C":
        clearInput();
        break;
      case "+/-":
        handleSignChange();
        break;
      case "%":
        handlePercentage();
        break;
      default:
        setInput(input + value);
    }
  };

 
  const calculateResult = () => {
    try {
 
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };


  const clearInput = () => {
    setInput("");
  };

 
  const handleSignChange = () => {
    if (input.charAt(0) === "-") {
      setInput(input.slice(1));
    } else {
      setInput("-" + input);
    }
  };

 
  const handlePercentage = () => {
    const expression = input.replace(/%/g, "/100");
    try {
      const result = eval(expression);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="background" style={backgroundStyle}>
      <img src="back.jpg" alt="" />
      <div className="grey-back">
        <div className="input1">
          <input
            type="text"
            value={input}
            readOnly
            onKeyDown={handleKeyDown} 
          />
        </div>
        <div className="btn">
          <div className="first">
            <button id="grey" value="C" onClick={handleClick}>
              C
            </button>
            <button id="grey" value="+/-" onKeyDown={handleClick} >
              +/-
            </button>
            <button id="grey" value="%" onKeyDown={handleClick}>
              %
            </button>
            <button id="orange" value="/" onKeyDown={handleClick}>
              /
            </button>
          </div>
          <div className="first">
            <button value="7" onKeyDown={handleClick}>
              7
            </button>
            <button value="8" onKeyDown={handleClick}>
              8
            </button>
            <button value="9" onKeyDown={handleClick}>
              9
            </button>
            <button id="orange" value="*" onKeyDown={handleClick}>
              *
            </button>
          </div>
          <div className="first">
            <button value="4" onKeyDown={handleClick}>
              4
            </button>
            <button value="5" onKeyDown={handleClick}>
              5
            </button>
            <button value="6" onKeyDown={handleClick}>
              6
            </button>
            <button id="orange" value="-" onKeyDown={handleClick}>
              -
            </button>
          </div>
          <div className="first">
            <button value="1" onKeyDown={handleClick}>
              1
            </button>
            <button value="2" onKeyDown={handleClick}>
              2
            </button>
            <button value="3" onKeyDown={handleClick}>
              3
            </button>
            <button id="orange" value="+" onKeyDown={handleClick}>
              +
            </button>
          </div>
          <div className="fouth">
            <button id="zero" value="0" onKeyDown={handleClick}>
              0
            </button>
            <button value="." onKeyDown={handleClick}>
              .
            </button>
            <button id="orange" value="=" onKeyDown={handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
