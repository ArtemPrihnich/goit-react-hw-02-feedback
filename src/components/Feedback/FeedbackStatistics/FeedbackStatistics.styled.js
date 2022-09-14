import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
     justify-content: space-evenly;
    margin: 20px auto 0;
    padding: 20px;
    width: 300px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    border-radius: 5px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    width: 55px;
    padding: 5px;
    font-weight: 700;
    border: ${props => `1px dashed ${props.theme.colors.black}`};
    border-radius: 5px;
    background-color: ${props => `${props.theme.colors.gray}`};

    &:nth-last-of-type(-n + 2) {
        width: 44%;
        margin-top: 20px;
    }
`;

export const Text = styled.span`
    display: block;
    margin-top: 5px;
    font-size: 30px;
`