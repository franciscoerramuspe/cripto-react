import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectCoins from "../hooks/useSelectCoins";
import { currencies } from "../data/currencies";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 3%;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = ({setCurrencies}) => {
   
    const [ cryptos, setCryptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ currency, SelectCurrency ] = useSelectCoins('Select your currency', currencies)
    const [ cryptoCurrency, SelectCryptourrency ] = useSelectCoins('Select your Cryptocurrency', cryptos)


    useEffect(() => {
        const consultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const response = await fetch(url)
            const result = await response.json()

            const arrayCrypto = result.Data.map( crypto => {
                const object = {
                    id : crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return object
            })
            setCryptos(arrayCrypto)
        }
        consultAPI();
    }, [])

    
    const handleSubmit = e => {
        e.preventDefault()

         if([currency, cryptoCurrency].includes('')) {
            setError(true)
            return
         }
         
         setError(false)
         setCurrencies({
            currency,
            cryptoCurrency
         })

    }

    return (
        <>
            {error && <Error>you must select a currency and a criptocurrency</Error>}
            <form
                onSubmit={handleSubmit}
            >
                < SelectCurrency />
                < SelectCryptourrency/>
                
                <InputSubmit type="submit" value="Track value" />
            </form>
        </>
    );
};

export default Form