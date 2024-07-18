import { Route, Routes } from 'react-router-dom'

import { CreateProfessional } from '../pages/createProfessional';
import { Login } from '../pages/login';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route path='/'>
                <Route  path = "/" element={<Login/>}/>
                <Route  path = "/createAccount" element={<CreateProfessional/>}/>
            </Route>
        </Routes>
    );
}