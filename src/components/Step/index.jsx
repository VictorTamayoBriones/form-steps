import { StepContainer } from './style';

export const Step = ({ number, active }) => {
    return(
        <StepContainer active={ active === number ? true : null } >{ number }</StepContainer>
    )
}