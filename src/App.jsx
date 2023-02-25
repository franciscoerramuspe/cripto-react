import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import Form from './components/Form';
import Spinner from './components/Spinner';
import Result from './components/Result';
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
  const [ result, setResult ] = useState({})
  const [ loading, setLoading ] = useState(false)



  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      const trackCrypto = async() => {
        setLoading(true)
        setResult({})
        const { currency, cryptoCurrency} = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
       
        const response = await fetch(url)
        const result = await response.json()

        setResult(result.DISPLAY[cryptoCurrency][currency])
        setLoading(false)
      }
      trackCrypto();
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
 
      {loading && <Spinner />}
      { result.PRICE && <Result result= {result} /> }
      </div>
    
    </Container>
  );
}

export default App
