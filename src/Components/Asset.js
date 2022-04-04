import React from 'react';
import styled from 'styled-components'
import axiosWithAuth from '../Utils/axiosWithAuth';


const AssetStyling = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5% 0%;
`

const Asset = (props) => {

    const { asset } = props

    const handleDelete = () => {
        axiosWithAuth()
        .delete(`/asset/${asset.asset_id}`)
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }
    console.log(asset.asset_name)
    return(
        <div >
            <AssetStyling>
                <h2 onClick={handleDelete}>[ X ]</h2>
                <h2> {asset.asset_name}</h2>
                <h2> {asset.asset_price}</h2>
            </AssetStyling>
        </div>
    )
}

export default Asset