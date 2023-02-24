import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import Form from './components/Form';
import ImageCripto from'./img/imagen-criptos.png';
import useSelectCoins from './hooks/useSelectCoins';


const Container = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  } 
`

const Image = styled.img `
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1 `
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 42px;

  &::after {
    content: '';
    width: 140px;
    height: 6px;
    background-color: #66a2FE;
    display: block;
    margin: 10px auto 0 auto;

  }

`
function App() {
  
  const [ currencies, setCurrencies ] = useState({})

  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      console.log(currencies)
    }
  }, [currencies])

  return (
    <Container>
      <Image
        src={ImageCripto}
        alt="image cripto"
      />
      <div>
        <Heading>Track the real-time price of your favorite Criptocurrencies</Heading>
        <Form 
          setCurrencies = {setCurrencies}
        />
 
      </div>
    
    </Container>
  );
}

export default App
