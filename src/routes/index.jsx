import { Routes, Route } from 'react-router-dom';
import { DatosPersonales } from '../views/datosPersonales';
import { DatosDeContacto } from '../views/datosDeContacto';
import { DatosDeInmueble } from '../views/datosDeInmueble';
import { FotosDeInmueble } from '../views/fotosDeInmueble';
import { Final } from '../views/final';

export const FormRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <DatosPersonales number="1" /> } />
            <Route path="/datos-contacto" element={ <DatosDeContacto number="2" /> } />
            <Route path="/datos-inmueble" element={ <DatosDeInmueble number="3" /> } />
            <Route path="/fotos-inmueble" element={ <FotosDeInmueble number="4" /> } />
            <Route path="/final" element={ <Final number="5" /> } />
        </Routes>
    )
}