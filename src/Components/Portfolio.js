import React from 'react';
import Asset from './Asset'
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';

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

const Portfolio = (props) => {

    const { push } = useHistory();

    // const user_id = useParams();
	// const { portfolio } = props;

    const handleDelete = () => {

		// axiosWithAuth()
		// .delete(``)
		// .then( resp => {
		// 	push(`/`)
		// })
		// .catch( err => {
		// 	console.log(err)
		// })

	}

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
                <Asset />
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