import React, { useState } from "react";

import Button from "../Button/Button";
import OutputArea from "../OutputArea/OutputArea";

import "./styles.css";

const Calculator = () => {
  const [result, setResult] = useState({
    a: "",
    b: "",
    op: null,
  });

  return (
    <div>
      <OutputArea value={result.a} />
      <Button
        type="Clear"
        double={true}
        colored={true}
        setResult={setResult}
        operator={true}
      />
      <Button type="C" colored={true} setResult={setResult} operator={true} />
      <Button type="÷" colored={true} setResult={setResult} operator={true} />
      <br />
      <Button type="7" setResult={setResult} />
      <Button type="8" setResult={setResult} />
      <Button type="9" setResult={setResult} />
      <Button type="×" colored={true} setResult={setResult} operator={true} />
      <br />
      <Button type="4" setResult={setResult} />
      <Button type="5" setResult={setResult} />
      <Button type="6" setResult={setResult} />
      <Button type="-" colored={true} setResult={setResult} operator={true} />
      <br />
      <Button type="1" setResult={setResult} />
      <Button type="2" setResult={setResult} />
      <Button type="3" setResult={setResult} />
      <Button type="+" colored={true} setResult={setResult} operator={true} />
      <br />
      <Button type="0" setResult={setResult} />
      <Button type="." setResult={setResult} />
      <Button
        type="="
        double={true}
        colored={true}
        setResult={setResult}
        operator={true}
      />
    </div>
  );
};

export default Calculator;
