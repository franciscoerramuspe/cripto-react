import styled from "@emotion/styled"

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
    return (
        <div>
            <p>The price is: <span>{PRICE}</span></p>
            <p>Highest price of the day is: <span>{HIGHDAY}</span></p>
            <p>Lowest price of the day is: <span>{LOWDAY}</span></p>
            <p>Variation throghout the last 24hs: <span>{CHANGEPCT24HOUR}</span></p>
            <p>Last updated: <span>{LASTUPDATE}</span></p>
        </div>
    )
}

export default Result