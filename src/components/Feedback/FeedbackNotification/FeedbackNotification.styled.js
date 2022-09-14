import styled from "@emotion/styled";

export const Text = styled.p`
    display: block;
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 0;
    text-align: center;
    font-size: 28px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    border-radius: 5px;
`;