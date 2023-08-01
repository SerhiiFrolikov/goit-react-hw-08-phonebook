import styled from '@emotion/styled';

export const Form = styled.form`
  width: 320px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  width: 250px;
  font-size: 16px;
  padding: 10px;
  margin-top: 5px;
  color: #2d2d2d;
  background-color: #e8e8e8;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 3px;
  transition: box-shadow 250ms linear;
  :focus {
    box-shadow: 0px 0px 8px #004d80;
  }
`;
export const Button = styled.button`
  background-color: #004d80;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #004d80;
  width: 98px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #bbe4ff;
    color: #004d80;
  }
  &.active {
    background-color: #bbe4ff;
    color: #004d80;
  }
  @media screen and (max-width: 468px) {
    width: 68px;
  }
`;
