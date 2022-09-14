import styled from "@emotion/styled";

export const Box = styled.section`
    width: 500px;
    margin: 0 auto;
    padding: 20px 0;
    background-color: ${props => props.theme.colors.lightgray};

    &:first-of-type{
        margin-top: 40px;
    }
`;

export const Title = styled.h1`
    text-align: center;  
    margin: 0;
    margin-top: 10px;
`;
