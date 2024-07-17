import { FormEvent, useState } from "react";
import { TextField } from "../../components/molecules/textField";
import { Background, Form, Modal, Title } from "./styles";
import { Button } from "../../components/atoms/button";
import { useNavigate } from "react-router-dom";
import { ProfessionalProps } from "../../types/professional";
import { createProfessional } from "../../services/professionalService";
import { ErrorMessage } from "../../components/atoms/errorMessage";

interface FormErrors {
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }

export function CreateProfessional(){
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formError, setFormError] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});


    function validate(){
        let errors:FormErrors = {}
        if (!name) {
          errors.name = 'Nome é obrigatório!';
        }
        
        if (!lastName) {
          errors.lastName = 'Sobrenome é obrigatório!';
        }
      
        if (!email) {
          errors.email = 'Email é obrigatório!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email inválido';
        }
      
        if (!password) {
          errors.password = 'Password é obrigatório!';
        } else if (password.length < 6){
          errors.password = 'Senha deve possuir pelo menos 6 caracteres'
        }
      
        return errors;
    };

    async function submit(e: FormEvent){
        setErrors({})
        setFormError(false);
        setIsLoading(true)
        const validationErrors = validate();
        e.preventDefault();

        if (Object.keys(validationErrors).length === 0) {
            const body: ProfessionalProps = {
                name: name,
                lastName: lastName,
                email: email,
                password: password
            }
            const response = await createProfessional(body)
            if(response?.status === 200){
                navigate('/')
            }
            setFormError(true)
        } else {
            setErrors(validationErrors);
        }
        setIsLoading(false)
    }

    return(
        <Background>
            <Modal>
                <Button 
                    variant="text" 
                    color="primary"
                    onClick={()=>{
                        navigate('/')
                    }}
                >
                    Voltar
                </Button>
                <Title>Cadastro</Title>
                <Form onSubmit={submit}>
                    <TextField
                        labelText="Name"
                        placeholder="Name"
                        value={name}
                        onChange={(value)=>{
                            setName(value.target.value)
                        }}
                        status={errors.name ? 'error' : 'default'}
                        errortext={errors.name}
                    />
                    <TextField
                        labelText="Sobrenome"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(value)=>{
                            setLastName(value.target.value)
                        }}
                        status={errors.lastName ? 'error' : 'default'}
                        errortext={errors.lastName}
                    />
                    <TextField
                        labelText="Email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(value)=>{
                            setEmail(value.target.value)
                        }}
                        status={errors.email ? 'error' : 'default'}
                        errortext={errors.email}
                    />
                    <TextField
                        labelText="Password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(value)=>{
                            setPassword(value.target.value)
                        }}
                        status={errors.password ? 'error' : 'default'}
                        errortext={errors.password}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={submit}
                        loading={isLoading}
                    >
                        Confirmar
                    </Button>
                    {formError && <ErrorMessage errortext="Algo deu errado tente novamente mais tarde!"/>}
                </Form>
            </Modal>
        </Background>
    )
}