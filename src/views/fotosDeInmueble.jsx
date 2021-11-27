import { ContainerInputFile, Form } from "../components/FormElements"
import { Fotos } from "../components/Fotos"
import { Steps } from "../components/Steps"
import { Title } from "../components/Title"

export const FotosDeInmueble = ({ number }) => {

    return(
        <>
            <Steps number={ number } />
            <Title title="Fotos de inmueble" />
            <Form>
                <ContainerInputFile>
                    <label for="file" >Agregar foto <i className="bi bi-plus-circle"></i> </label>
                    <input type="file" id="file" />
                </ContainerInputFile>
            </Form>
            <Fotos/>
        </>
    )

}