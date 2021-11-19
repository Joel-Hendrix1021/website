import styled from "@emotion/styled";

interface InputProps {
  borderColor?: string;
  width?: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px;
  width: 350px;
  height: 40px;
  background: #ffffff;
  border: 2px solid ${(props) => props.borderColor || "#CDD5F0"};
  opacity: 1;
  transition: border 0.3s ease-in-out;
  border-radius: 100px;
`;

export const InputStyle = styled.input`
  outline: none;
  border: none;
  width: 90%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #131d40cc;
`;
