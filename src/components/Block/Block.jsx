import React from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    overflow: hidden;

    font-size: 4rem;

    background-color: ${({ color }) => color};
`;

const Block = (props) => {
    return <StyledBlock color={props.color}>{props.children}</StyledBlock>;
};

export default Block;
