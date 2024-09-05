import api from "..";

export async function getPatients(){
    try{
        const response = await api.get('/patientProfessional/getPatients');
        return response
    }catch(e: any) { 
        return e;
    }
}