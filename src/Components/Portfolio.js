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
const initialNetWorth = 0.00
const initialPrice = 0

const Portfolio = () => {

    const [assets, setAssets] = useState(initialAssets)
    const [totalNW, setTotalNW] = useState(initialNetWorth)
    const [ btcPrice, setBTCPrice ] = useState(initialPrice)

    useEffect(() => {
        
		axios
			.get('https://btc-net-worth.herokuapp.com/api/assets')
			.then((res) => {
                setInterval(() => {
				setAssets(res.data);
                }, 1000)
			})
			.catch((err) => {
				console.log(`The error is: ${err}` );
			});
        
	}, []);


    const handleRefresh = () => {
        window.location.reload()    
    }

    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(resp => {
        setBTCPrice(resp.data.bpi.USD.rate)
    })
    .catch(err => {
        console.log(err)
    })

    console.log(btcPrice)    

    // const currentUserAssets = setInterval(() => {
    //     assets.filter( asset => asset.user_id === localStorage.user_id)
    // }, 3000)

    // console.log(`Current user assets: ${currentUserAssets}`)

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
                {assets.map( asset => {
					return(
					<Asset asset={asset} />)
                    
				})}
            </section>   
            
            <section>
                <TotalStyling>
                    <h2>Total Net Worth</h2>
                    <h2>{totalNW} BTC</h2>
                </TotalStyling>
            </section>
            </PortfolioStyling>
        </div>
    )
}

export default Portfolio