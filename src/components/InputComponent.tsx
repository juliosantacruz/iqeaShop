import React from "react";
import styled from "styled-components";

type InputProps = {
  className?: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  value?: string|number;
  inputChange?:any
};

function InputComponent({
  className,
  name,
  label,
  type,
  required,
  value,
  inputChange
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={`${name}-input`} className={`label ${value ? "has-value" : ""}`}>
        {label}
      </label>
      <input
        id={`${name}-input`}
        type={type}
        className="input"
        name={name}
        required={required}
        value={value}

        onChange={(event: any) => inputChange(event)}
      />
    </div>
  );
}

export default styled(InputComponent)`
width:100%;
  position:relative;
  border:1px solid #9da3a6;
  border-radius:4px;
  margin-bottom:16px;

.label{
  position:absolute;
  left:10px;
  top:10px;
  font-size:16px;
  color:#444444;
  pointer-events:none;
  transition: .2s ease all;
}
.label:has(+ .input:focus){
  top:8px;
  font-size:10px;

}
.has-value{
  top:8px;
  font-size:10px;

}
.input{
  font-size:16px;
  height:45px;
  background:white;
  width:100%;
  padding:20px 10px 0;
  text-overflow:ellipsis;
  border-radius:4px;
}
`;
