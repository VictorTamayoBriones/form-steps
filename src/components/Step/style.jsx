import styled from 'styled-components';
import { theme } from '../../theme';

export const StepContainer = styled.div`
    width: 30px;
    height: 30px;
    border: solid 1px ${ theme.principal };
    border-radius: 50%;
    color: ${ props => props.active ? '#fff' : theme.principal };
    background: ${ props => props.active ? theme.principal : '#fff'};
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    cursor: default;
`;