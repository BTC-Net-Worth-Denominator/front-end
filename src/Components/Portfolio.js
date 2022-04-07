import Asset from './Asset'
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`

const VPStyling = styled.div`
    background-color: orange;
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 1% 15%;
`

const PortfolioStyling = styled.div`
    padding-top: 4%;
    padding-bottom: 30%;
`

const TotalStyling = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const initialAssets = []
const initialUserAssets = []
const initialPrice = 0

const Portfolio = () => {

    const [assets, setAssets] = useState(initialAssets)
    const [userAssets, setUserAssets] = useState(initialUserAssets)
    const [btcPrice, setBTCPrice] = useState(initialPrice)
    let totalNW = 0

    useEffect(() => {

        const pricePromise = axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        
        .catch(err => {
            console.log(err)
        })

		const assetPromise = axios.get('https://btc-net-worth.herokuapp.com/api/assets')
			
			.catch((err) => {
				console.log(`The error is: ${err}` );
			});

        Promise.all([pricePromise, assetPromise]).then(([priceRes, assetRes]) => {

            setBTCPrice(priceRes.data.bpi.USD.rate_float)
            setAssets(assetRes.data.filter(asset => asset.user_id === parseInt(localStorage.user_id)));

        })

	}, []);
    if (assets.length === 0){
        return <div>Loading....</div>
    }
    console.log(assets)
    // .filter(asset => asset.user_id === localStorage.user_id)

    const handleRefresh = () => {
        window.location.reload()    
    }


    // Adding together total net worth by mapping over each asset

    assets.map(asset => {
        totalNW += asset.asset_price
    })

    // Map over assets, filter out for assets owned by logged in user only, add the total asset_value to totalNW variable
    
    console.log(assets[0].user_id)
    console.log(localStorage.user_id)

    //const answer = assets.filter(asset => asset.user_id === localStorage.user_id)
    //console.log(answer)
    console.log(assets)

    return(
        <div>
            <PortfolioStyling>
            <HeaderDiv>
                <h2>Remove Asset</h2>
                <VPStyling>
                    <h1>VIEW PORTFOLIO</h1>
                </VPStyling>
                <h1 onClick={handleRefresh}>⟳</h1>
            </HeaderDiv>

            <section>
                {assets.map(asset => {

					return(
					<Asset asset={asset} />)

				})}
            </section>   
            
            <section>
                <TotalStyling>
                    <h2>Total Net Worth</h2>
                    <h2>{totalNW * (1/btcPrice)} BTC</h2>
                </TotalStyling>
            </section>
            </PortfolioStyling>
        </div>
    )
}

export default Portfolio