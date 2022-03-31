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

const Portfolio = () => {

    const [assets, setAssets] = useState(initialAssets)

    useEffect(() => {
		axios
			.get('https://btc-net-worth.herokuapp.com/api/assets')
			.then((res) => {
				setAssets(res.data);
			})
			.catch((err) => {
				console.log(`The error is: ${err}` );
			});
	}, []);

    console.log(assets)

    return(
        <div>
            <PortfolioStyling>
            <HeaderDiv>
                <h2>Remove Asset</h2>
                <VPStyling>
                    <h1>VIEW PORTFOLIO</h1>
                </VPStyling>
                <h1>⟳</h1>
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
                    <h2>6.55 BTC</h2>
                </TotalStyling>
            </section>
            </PortfolioStyling>
        </div>
    )
}

export default Portfolio