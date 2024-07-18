export interface ProfessionalProps extends LoginProps{
    name: string;
    lastName: string;
}

export interface LoginProps {
    email: string;
    password: string;
}