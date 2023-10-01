import styled from "styled-components"

export const ResultBox = styled.div`
  color: #fff;
  display: flex;
  justify-content: flex-end;
  padding-right: 38px;
  font-family: sans-serif;
`

export const Result = styled.h1`
  font-size: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 425px) {
  & {
    display: block;
  }
}
`
