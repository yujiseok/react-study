import React from "react";
import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <br />
      <p>{value}</p>
    </div>
  );
};

export default Input;
