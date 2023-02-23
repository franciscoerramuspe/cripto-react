import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label `
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.label `
const useSelectCoins = (label, options) => {
    
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Selections: </option>

        {options.map(option => (
          <option
            key={option.id}
            value={option.id}
          >{option.name}</option>
        ))}
      </select>
    </>
  )
        
    
  return [ SelectCurrency ]
}

export default useSelectCoins;