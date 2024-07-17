import { Route, Routes } from 'react-router-dom'

import { CreateProfessional } from '../pages/createProfessional';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route path='/'>
                <Route  path = "/createAccount" element={<CreateProfessional/>}/>
            </Route>
        </Routes>
    );
}