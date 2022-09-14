import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 40px 0 0 0 ;
`;

export const Item = styled.li`
    list-style: none;
    
`;

export const Button = styled.button`
    display: inline-block;
    margin: 0;
    padding: 10px 20px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    border-radius: 5px;
    cursor: pointer;

    &::first-letter{
        text-transform: uppercase;
    }

    &:hover {
        transition-duration: 250ms;
        transform: scale(1.1);
        background-color: ${props => `${props.theme.colors.gray}`};
    }
`;