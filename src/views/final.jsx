import { Steps } from "../components/Steps"
import { Title } from "../components/Title"

export const Final = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Ya casi terminamos!" />
        </>
    )

}