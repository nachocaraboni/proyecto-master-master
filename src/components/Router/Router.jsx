import { Home } from './../Pages/Home/Home';
import { Promociones } from './../Pages/Promociones/Promociones';
import { Nosotros } from './../Pages/Nosotros/Nosotros';
import { Contacto } from './../Pages/Contacto';
import { Perfil } from '../Login/Perfil';
import { Carrito } from '../Carrito';
import { ItemListContainer } from '../Pages/Home/ItemsList';
import { ItemDetailsContainer } from '../Pages/Home/ItemDetails';
import { LoginLayout } from '../Layout';
import { Route, Routes } from 'react-router-dom';
import { CarrouselContainer } from '../Pages/Inicio/CarrouselContainer';
import { MetodoDePago } from '../Carrito/MetodoDePago';


export const Router = () =>{
        
 return(

    <LoginLayout>
        <Routes>
                <Route path='/' element={<CarrouselContainer />} />
                <Route path='/*' element={<CarrouselContainer />}/>
                <Route path='/productos' element={<ItemListContainer />}/>
                <Route path='/inicio' element={<CarrouselContainer />} />
                <Route path='/promociones' element={<Promociones />}/>
                <Route path='/perfil' element={<Perfil />}/>
                <Route path='/carrito' element={<Carrito />}/>
                <Route path='/item/:id' element={<ItemDetailsContainer />}/>
                <Route path='/nosotros' element={<Nosotros />}/>
                <Route path='/contacto' element={<Contacto />}/>
                <Route path='/metododepago' element={<MetodoDePago />}/>             
        </Routes>
    </LoginLayout>
    )
}