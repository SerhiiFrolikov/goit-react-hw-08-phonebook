import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Username = styled.p`
  font-weight: 700;
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
