import api from "..";
import { LoginProps, ProfessionalProps } from "../../types/professional";

export async function createProfessional({ ...props }: ProfessionalProps){
    try{
        const response = await api.post('/professional/create', props);
        return response
    }catch(e: any) { 
        return e;
    }
}

export async function login({ ...props }: LoginProps){
    try{
        const response = await api.post('/professional/login', props);
        return response
    }catch(e: any) { 
        return e;
    }
}