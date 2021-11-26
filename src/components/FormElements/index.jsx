import styled from 'styled-components';
import { theme } from '../../theme';

export const Form = styled.form`
    width: 80%;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const DualContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`;

export const Input = styled.input`
    width: ${ props => props.small ? '30%' : '100%' };
    border: none;
    border-bottom: solid 1px ${ theme.principal };
    caret-color: ${ theme.principal };
    color: ${ theme.text };
    font-size: 18px;
    outline: none;
`;

export const Button = styled.button`
    border: solid 1px ${ theme.principal };
    color: ${ theme.principal };
    font-size: 16px;
    padding: 5px 0px;
    background: none;
    border-radius: 5px;
    cursor: pointer;
    transition: ease all .5s;
    &:hover{
        background: ${ theme.principal };
        color: #fff;
    }
`;