import React from 'react';
import styled from 'styled-components'

const AssetStyling = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5% 0%;
`

const Asset = () => {

    return(
        <div>
            <AssetStyling>
                <h2>[ X ]</h2>
                <h2> Asset </h2>
                <h2> 4.12 BTC</h2>
            </AssetStyling>
        </div>
    )
}

export default Asset