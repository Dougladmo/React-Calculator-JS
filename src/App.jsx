import { useState } from "react"
import { Container, ContainerCientific } from "./components/layout/Container.style"
import {
  NumberButton,
  OperatorButton,
  GrayButton,
  ZeroButton,
  CientificButton
} from "./components/Button.style"
import { Result, ResultBox, Title } from "./components/layout/Result.style"
import { FaReact } from "react-icons/fa";
import { FaDivide, FaSquareRootVariable } from "react-icons/fa6";

function App() {
  const [num, setNum] = useState(0)
  const [firstNum, setFirstNum] = useState('0')
  const [operator, setOperator] = useState("")

  const percentage = () => {
    setNum(num / 100)
  }

  const numberInput = (e) => {
    const input = e.target.value
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  const operatorHandler = (e) => {
    const operatorInput = e.target.value
    setOperator(operatorInput)
    setFirstNum(num)
    setNum(0)
  }

  const clear = () => {
    setNum(0)
  }

  const changeSign = () => {
    if (num > 0) {
      setNum(parseFloat(-num))
    } else {
      setNum(parseFloat(num * -1))
    }
  }

  const squareRoot = () => {
    setNum((Math.sqrt(num)).toLocaleString('pt-BR'))
  }

  const calculate = () => {
    if (operator === "/") {
      setNum((firstNum / num).toLocaleString('pt-BR'))
    } else if (operator === "X") {
      setNum((firstNum * num).toLocaleString('pt-BR'))
    } else if (operator === "-") {
      setNum((firstNum - num).toLocaleString('pt-BR'))
    } else if (operator === "+") {
      setNum((parseFloat(firstNum) + parseFloat(num)).toLocaleString('pt-BR'))
    } else if (operator === "xn") {
      setNum((firstNum**num.toLocaleString('pt-BR')))
    }
  }

  const factorial = () => {
    let sum = num
    if (num <= 2 ) {
      if (num <= 0) {
        setNum(1)
        return
      }
      for (let i = 1; i <= num; i++) {
        sum = sum * i
      }
      setNum((sum.toLocaleString('pt-BR')))
    } else {
      for (let i = 1; i <= num - 1; i++) {
        sum = sum * i
      }
      setNum((sum.toLocaleString('pt-BR')))
    }
  }

  const logTen = () => {
    setNum((Math.log10(num)).toLocaleString('pt-BR'))
  }

  const logTwo = () => {
    setNum((Math.log2(num)).toLocaleString('pt-BR'))
  }

  const LogN = () => {
    setNum((Math.log(num)).toLocaleString('pt-BR'))
  }

  const squared = () => {
    setNum((num**2).toLocaleString('pt-BR'))
  }

  return (
    <>
      <div className="title">
      <Title>React Calculator</Title>
      <FaReact className="react" />
      </div>
        <div className="buttons">
      <Container>
        <ResultBox>
          <Result value={num} disabled/>
        </ResultBox>
          <GrayButton onClick={clear}>AC</GrayButton>
          <GrayButton onClick={changeSign}>+/-</GrayButton>
          <GrayButton onClick={percentage}>%</GrayButton>
          <OperatorButton onClick={operatorHandler} value={"/"}>
            <FaDivide className="divide" />
          </OperatorButton>
          <NumberButton onClick={numberInput} value={7}>
            7
          </NumberButton>
          <NumberButton onClick={numberInput} value={8}>
            8
          </NumberButton>
          <NumberButton onClick={numberInput} value={9}>
            9
          </NumberButton>
          <OperatorButton onClick={operatorHandler} value={"X"}>
            x
          </OperatorButton>
          <NumberButton onClick={numberInput} value={4}>
            4
          </NumberButton>
          <NumberButton onClick={numberInput} value={5}>
            5
          </NumberButton>
          <NumberButton onClick={numberInput} value={6}>
            6
          </NumberButton>
          <OperatorButton onClick={operatorHandler} value={"-"}>
            -
          </OperatorButton>
          <NumberButton onClick={numberInput} value={1}>
            1
          </NumberButton>
          <NumberButton onClick={numberInput} value={2}>
            2
          </NumberButton>
          <NumberButton onClick={numberInput} value={3}>
            3
          </NumberButton>
          <OperatorButton onClick={operatorHandler} value={"+"}>
            +
          </OperatorButton>
          <ZeroButton onClick={numberInput} value={0}>
            0
          </ZeroButton>
          <NumberButton onClick={numberInput} value=".">
            ,
          </NumberButton>
          <OperatorButton onClick={calculate}>=</OperatorButton>
      </Container>
      <div className="cientific_box">
      <ContainerCientific>
          <CientificButton onClick={squareRoot} ><FaSquareRootVariable /> </CientificButton>
          <CientificButton onClick={squared} >X^2</CientificButton>
          <CientificButton onClick={operatorHandler} value={'xn'}>X^n</CientificButton>
          <CientificButton onClick={factorial}>!</CientificButton>
          <CientificButton onClick={LogN} >ln</CientificButton>
          <CientificButton onClick={logTen} >Log 10</CientificButton>
          <CientificButton onClick={logTwo} >Log 2</CientificButton>
          <CientificButton ><FaReact className="react_btn" /></CientificButton>
      </ContainerCientific>
      </div>
        </div>
    </>
  )
}

export default App
