import api from "..";

export async function createPatientProfessionalRelation(id: string){
    try{
        const response = await api.post('/patientProfessional', {id: id});
        return response
    }catch(e: any) { 
        return e;
    }
}