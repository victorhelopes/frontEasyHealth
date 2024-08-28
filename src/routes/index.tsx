import { Route, Routes, useNavigate } from 'react-router-dom'

import { CreateProfessional } from '../pages/createProfessional';
import { Login } from '../pages/login';
import { useEffect, useState } from 'react';
import { getProfessionalInfo } from '../services/api/professionalService';
import { CreatePatient } from '../pages/createPatient';

export default function PagesRoutes(){
    const navigate = useNavigate();
    const [signed, setSigned] = useState(false);

    useEffect(()=>{
        async function getToken(){
            const response = await getProfessionalInfo();
            if(response.status === 200){
                setSigned(true)
            }else{
                navigate('/')
            }
        }
        getToken();
    },[navigate])

    return(
        <Routes>
            <Route path='/'>
                {!signed? 
                    <>
                        <Route path = "/" element={<Login/>}/>
                        <Route path = "/createAccount" element={<CreateProfessional/>}/>
                    </>
                    :
                    <>
                        <Route path='/createPatient' element={<CreatePatient/>}/>
                    </>
                }
            </Route>
        </Routes>
    );
}