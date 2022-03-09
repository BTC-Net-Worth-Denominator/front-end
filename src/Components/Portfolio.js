import React from 'react';
import Asset from './Asset'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    color: white;
    width: 80%;
`

const Portfolio = () => {

    return(
        <div>
            <HeaderDiv>
                <h3>Remove Asset</h3>
                <h1>View Portfolio</h1>
                <h1>⟳</h1>
            </HeaderDiv>
            <section>
                <Asset />
            </section>
            <section>
                <img></img>
                <h2>Total Net Worth</h2>
                <h2>6.55 BTC</h2>
            </section>
        </div>
    )
}

export default Portfolio