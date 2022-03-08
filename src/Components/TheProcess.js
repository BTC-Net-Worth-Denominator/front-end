import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StepContainer = styled.div`
    display: flex;
    align-items: flex-start;
`
const Process = () => {


    return(
        <div>
            <center><h1>The Process</h1></center>
            <br />
            <StepContainer>
                <h1>1</h1>
                <h3>Create an account</h3>
            </StepContainer>
            <br />
            <StepContainer>
                <h1>2</h1>
                <h3>Add assets to your portfolio</h3>
            </StepContainer>
            <br />
            <StepContainer>
                <h1>3</h1>
                <h3>Assign a USD value to your asset</h3>
            </StepContainer>
            <br />
            <StepContainer>
                <h1>4</h1>
                <h3>View entire net worth denominated in BTC</h3>
            </StepContainer>
        </div>
    )
}

export default Process