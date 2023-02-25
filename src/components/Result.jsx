import styled from "@emotion/styled"

const FinalResult = styled.div`
    color:#FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;


`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
    
`
const Image = styled.img`
    display:block;
    width: 120px;
`


const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
    return (
        <FinalResult>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='image crypto'></Image>
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>Highest price of the day is: <span>{HIGHDAY}</span></Text>
                <Text>Lowest price of the day is: <span>{LOWDAY}</span></Text>
                <Text>Variation throghout the last 24hs: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last updated: <span>{LASTUPDATE}</span></Text>
            </div>
        </FinalResult>
    )
}

export default Result