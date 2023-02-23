import React from "react";
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

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = () => {
   
    const [ SelectCurrency ] = useSelectCoins('Select your currency', currencies)
    

    

    return (
        <form>
            < SelectCurrency />
            
            <InputSubmit type="submit" value="Track value" />
        </form>
    );
};

export default Form