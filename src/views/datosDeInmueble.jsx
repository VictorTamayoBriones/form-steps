import { Steps } from "../components/Steps"
import { Title } from "../components/Title"


export const DatosDeInmueble = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Datos del Inmueble" />
        </>
    )

}