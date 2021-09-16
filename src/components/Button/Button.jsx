import React from "react";

import "./styles.css";

const Button = (props) => {
  const { setResult, operator } = props;
  //   const OPERATIONS = ["Clear", "C", "÷", "×", "-", "+", "="];

  const handleClick = () => {
    setResult((prevValue) => {
      if (operator) {
        switch (props.type) {
          case "Clear":
            return {
              a: "",
              b: "",
              op: null,
            };
          case "C":
            return {
              ...prevValue,
              a: prevValue.a.slice(0, prevValue.a.length - 1),
            };
          case "÷":
          case "×":
          case "-":
          case "+":
            return {
              b: prevValue.a,
              a: "",
              op: props.type,
            };
          case "=": {
            if (!prevValue.op) return prevValue;

            const { op } = prevValue;
            const a = parseFloat(prevValue.a);
            const b = parseFloat(prevValue.b);
            let res = 0;

            if (op === "÷") {
              res = b / a;
            } else if (op === "×") {
              res = b * a;
            } else if (op === "-") {
              res = b - a;
            } else if (op === "+") {
              res = b + a;
            }
            res = res.toString();

            return {
              a: res,
              b: "",
              op: null,
            };
          }

          default:
            return prevValue;
        }
      }
      return {
        ...prevValue,
        a: prevValue.a + props.type,
      };
    });
  };

  return (
    <button
      className={`buttons ${props.double ? "double" : null} ${
        props.colored ? "colored" : null
      }`}
      onClick={handleClick}
    >
      {props.type}
    </button>
  );
};

export default Button;
