import { Steps } from "../components/Steps"
import { Title } from "../components/Title"

export const DatosDeContacto = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Datos de Contacto" />
        </>
    )

}