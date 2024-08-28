import api from "..";
import { PatientProps } from "../../types/patient";

export async function createPatient({ ...props }: PatientProps){
    try{
        const response = await api.post('/patient/create', props);
        return response
    }catch(e: any) { 
        return e;
    }
}