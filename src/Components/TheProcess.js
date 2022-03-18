import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StepContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

const ProcessStyling = styled.div`
    padding: 4% 0%;
`

const NumberStyling = styled.div`
    background-color: orange;
    border-radius: 50%;
    padding: 2%;
    margin: 5%;
    color: black;
`

const Process = () => {


    return(
        <ProcessStyling>
            <center><h1>The Process</h1></center>
            <br />
            <StepContainer>
                <NumberStyling>
                    <h1>1</h1>  
                </NumberStyling>
                <h2>Create an account</h2>
            </StepContainer>
            <br />
            <StepContainer>
                <NumberStyling>
                    <h1>2</h1>
                </NumberStyling>
                <h2>Add assets to your portfolio</h2>
            </StepContainer>
            <br />
            <StepContainer>
                <NumberStyling>
                    <h1>3</h1>
                </NumberStyling>
                <h2>Assign a USD value to your asset</h2>
            </StepContainer>
            <br />
            <StepContainer>
                <NumberStyling>
                    <h1>4</h1>
                </NumberStyling>
                <h2>View entire net worth denominated in BTC</h2>
            </StepContainer>
        </ProcessStyling>
    )
}

export default Process