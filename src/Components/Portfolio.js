import React from 'react';
import Asset from './Asset'
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';

const HeaderDiv = styled.div`
    display: flex;
    color: white;
    width: 80%;
`

const PortfolioStyling = styled.div`
    padding: 4% 0%;
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
                <h3>Remove Asset</h3>
                <h1>View Portfolio</h1>
                <h1>⟳</h1>
            </HeaderDiv>
            <section>
                <Asset />
            </section>
            <section>
                <h2 onClick={handleDelete}>X</h2>
                <h2>Total Net Worth</h2>
                <h2>6.55 BTC</h2>
            </section>
            </PortfolioStyling>
        </div>
    )
}

export default Portfolio