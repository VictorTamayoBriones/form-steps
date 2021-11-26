import { Steps } from "../components/Steps"
import { Title } from "../components/Title"

export const FotosDeInmueble = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Fotos de inmueble" />
        </>
    )

}