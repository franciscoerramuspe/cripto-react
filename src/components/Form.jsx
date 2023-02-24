import { useEffect } from "react";
import styled from "@emotion/styled";
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

const Form = () => {
   
    const [ state, SelectCurrency ] = useSelectCoins('Select your currency', currencies)
    
    useEffect(() => {
        const consultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const response = await fetch(url)
            const result = await response.json()
            console.log(result.Data)
        }
        consultAPI();
    }, [])

    

    return (
        <form>
            < SelectCurrency />
            {state} 
            
            <InputSubmit type="submit" value="Track value" />
        </form>
    );
};

export default Form