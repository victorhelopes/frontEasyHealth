import api from ".";
import { ProfessionalProps } from "../types/professional";

export async function createProfessional({ ...props }: ProfessionalProps){
    try{
        const response = await api.post('/professional/create', props);
        return response
    }catch(e) { 
        console.error(e); 
    }
}