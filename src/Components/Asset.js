import React from 'react';
import styled from 'styled-components'

const AssetStyling = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5% 0%;
`

const Asset = (props) => {

    const { name, price } = props
    console.log(name)
    console.log(price)

    return(
        <div>
            <AssetStyling>
                <h2>[ X ]</h2>
                <h2> {/* assets.asset_name */} Asset Name</h2>
                <h2> {/* assets.asset_price */} BTC</h2>
            </AssetStyling>
        </div>
    )
}

export default Asset