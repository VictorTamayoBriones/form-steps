import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
    position: relative;
    margin-top: 25px;
    margin-bottom: 100px;
`;

export const StepsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${ theme.principal };
    position: absolute;
    top: 14px;
`;