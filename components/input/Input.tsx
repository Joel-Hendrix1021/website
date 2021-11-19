import { FocusEvent, MouseEvent, SyntheticEvent, useState } from "react";
import { InputContainer, InputStyle } from "./styles";

interface Props {
  label?: string;
  type?: string;
}

const Input = ({ label, type }: Props) => {
  const [border, setBorder] = useState("");

  const handleOnClick = (e: MouseEvent<HTMLInputElement>) => {
    console.log("onclick");
  };
  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    setBorder("#31C5C7");
  };
  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    setBorder("#CDD5F0");
  };

  const handleOnError = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log("onError");
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <InputContainer borderColor={border}>
        <InputStyle
          type={type}
          placeholder="placeholder"
          onClick={(e) => handleOnClick(e)}
          onFocus={(e) => handleOnFocus(e)}
          onBlur={(e) => handleOnBlur(e)}
          onError={(e) => handleOnError(e)}
        />
      </InputContainer>
    </div>
  );
};

export default Input;
