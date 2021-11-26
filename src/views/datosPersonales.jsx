import { Button, Form, Input } from "../components/FormElements"
import { Steps } from "../components/Steps"
import { Title } from "../components/Title"

export const DatosPersonales = ({number})  => {

    return(
        <>
            <Steps number={number} />
            <Title title="Datos Personales" />
            <Form>
                <Input placeholder="Name" type="text" />
                <Input placeholder="Apellidos" type="text" />
                <Button>Siguiente</Button>
            </Form>
        </>
    )

}