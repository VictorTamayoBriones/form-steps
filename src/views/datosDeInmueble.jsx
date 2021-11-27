import { Button, Form, Input, NumberContainer } from "../components/FormElements"
import { Steps } from "../components/Steps"
import { Title } from "../components/Title"


export const DatosDeInmueble = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Datos del Inmueble" />
            <Form>
                <NumberContainer>
                    <label>NO. De recamaras</label>
                    <Input type="number" placeholder="0" min="0" />
                </NumberContainer>

                <NumberContainer>
                    <label>NO. De baños</label>
                    <Input type="number" placeholder="0" min="0" />
                </NumberContainer>

                <NumberContainer>
                    <label>NO. Lugares de estacionamiento</label>
                    <Input type="number" placeholder="0" min="0" />
                </NumberContainer>

                <Button>Siguiente</Button>
            </Form>
        </>
    )

}