import { Step } from "../Step"
import { Container, Line, StepsContainer } from "./style"

export const Steps = ({number}) => {
    return(
        <Container>
            <StepsContainer>
                <Step number="1" active={number} />
                <Step number="2" active={number} />
                <Step number="3" active={number} /> 
                <Step number="4" active={number} />
                <Step number="5" active={number} />
            </StepsContainer>
            <Line/>
        </Container>
    )
}