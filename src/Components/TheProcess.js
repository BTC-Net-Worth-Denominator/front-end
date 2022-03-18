import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StepContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.25rem;
    border: white 5px solid;
    margin: 1% 0%;
`

const HeadingStyling = styled.div`
    font-size: 2rem;
`

const ProcessStyling = styled.div`
    padding: 2% 0%;
`

const NumberStyling = styled.div`
    background-color: orange;
    border-radius: 60%;
    text-align: center;
    padding: 1%;
    width: 8%;
    margin: 1%;
    color: black;
`

const Process = () => {


    return(
        <ProcessStyling>
            <HeadingStyling>
            <center><h1>The Process</h1></center>
            </HeadingStyling>
            <br />
            <StepContainer>
                <NumberStyling>
                    <h1>1</h1>  
                </NumberStyling>
                <h2>CREATE ACCOUNT</h2>
            </StepContainer>
            <StepContainer>
                <NumberStyling>
                    <h1>2</h1>
                </NumberStyling>
                <h2>ADD ASSETS TO PORTFOLIO</h2>
            </StepContainer>
            <StepContainer>
                <NumberStyling>
                    <h1>3</h1>
                </NumberStyling>
                <h2>ASSIGN USD VALUE TO ASSET</h2>
            </StepContainer>
            <StepContainer>
                <NumberStyling>
                    <h1>4</h1>
                </NumberStyling>
                <h2>VIEW PORTFOLIO NET WORTH IN BTC</h2>
            </StepContainer>
        </ProcessStyling>
    )
}

export default Process