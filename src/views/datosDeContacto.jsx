import { Button, DualContainer, Form, Input } from "../components/FormElements"
import { Steps } from "../components/Steps"
import { Title } from "../components/Title"

export const DatosDeContacto = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Datos de Contacto" />
            <Form>
                <Input type="text" placeholder="Dirección" />
                <DualContainer>
                    <Input type="text" placeholder="C.P" small={true} />
                    <Input type="text" placeholder="Número de Teléfono" />
                </DualContainer>
                <Input type="email" placeholder="Email" />
                <Button>Siguiente</Button>
            </Form>
        </>
    )

}