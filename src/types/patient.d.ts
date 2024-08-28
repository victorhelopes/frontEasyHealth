export interface PatientProps {
    cpf: string,
	name: string,
	lastName: string,
	telephone: string,
	email: string,
    birthDate?: string,
    job?: string,
    gender: "M" | 'F' | '',
    disorder?: string,
    responsibles?: PatientProps[]
}   