import { InputContainer, InputStyle } from "./styles";

interface Props {
  borderColor?: string;
}

const Input = ({ borderColor }: Props) => {
  return (
    <InputContainer borderColor={borderColor}>
      <InputStyle type="text" placeholder="placeholder" />
    </InputContainer>
  );
};

export default Input;
