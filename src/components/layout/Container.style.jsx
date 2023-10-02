import styled from "styled-components"

export const Container = styled.div`
  background-color: #000;
  max-width: 360px;
  min-width: auto;
  height: auto;
  padding: 10px 10px 15px 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 600px) {
    border-radius: 20px;
  }
`

export const ContainerCientific = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  margin-right: 0;
  background-color: #000;
  max-height: 400px;
  max-width: 370px;
  min-width: auto;
  height: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px 0 15px 10px;
`
