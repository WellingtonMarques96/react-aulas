import React from "react";
import Input from "./input";
import Button from "./Button";


const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="password" label="Password"/>
      <Button />
    </div>
  );
};

export default Form;