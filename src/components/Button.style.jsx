import styled from "styled-components"

export const NumberButton = styled.button`
  background-color: #333333;
  color: #fff;
  width: 80px;
  height: 80px;
  border: none;
  margin: 5px;
  font-size: 25px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: brightness(200%);
    transition: 0.5s;
  }

  @media (max-width: 400px) {
  & {
    width: 60px;
    height: 60px;
  }
}
`

export const OperatorButton = styled.button`
  background-color: #ff9601;
  color: #fff;
  width: 80px;
  height: 80px;
  border: none;
  margin: 5px;
  font-size: 25px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: grayscale(25%);
    transition: 0.5s;
  }
  
  @media (max-width: 400px) {
  & {
    width: 60px;
    height: 60px;
  }

  }
`

export const GrayButton = styled.button`
  background-color: #a8a8a8;
  color: #000;
  width: 80px;
  margin: 5px;
  height: 80px;
  border: none;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(150%);
    transition: 0.5s;
  }

  @media (max-width: 400px) {
  & {
    width: 60px;
    height: 60px;
  }
}
`

export const ZeroButton = styled.button`
  background-color: #333333;
  color: #fff;
  width: 169px;
  height: 80px;
  border: none;
  margin: 5px;
  border-radius: 999px;
  font-size: 25px;
  text-align: left;
  padding-left: 34px;
  cursor: pointer;

  &:hover {
    filter: brightness(200%);
    transition: 0.5s;
  }
  @media (max-width: 400px) {
  & {
    padding-left: 24px;
    width: 127px;
    height: 60px;
  }
}
`
