import { FormEvent, useState } from "react";
import { TextField } from "../../components/molecules/textField";
import { Background, Form, Modal, Title } from "./styles";
import { Button } from "../../components/atoms/button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api/professionalService";
import { setToken } from "../../services/helpers/tokenHelper";

interface FormErrors {
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }

export function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});


    function validate(){
        let errors:FormErrors = {}
      
        if (!email) {
          errors.email = 'Email é obrigatório!';
        }
      
        if (!password) {
          errors.password = 'Password é obrigatório!';
        }
      
        return errors;
    };

    async function submit(e: FormEvent){
        setErrors({})
        setIsLoading(true)
        const validationErrors = validate();
        e.preventDefault();

        if (Object.keys(validationErrors).length === 0) {
            const body = {
                email: email,
                password: password
            }
            const response = await login(body)
            console.log(response?.status === 200, response.data.token)
            if(response?.status === 200){
                setToken(response.data.token)
            } else {
                if(response?.response.data === 'Invalid password'){
                    setErrors({
                        password: 'Senha inválida'
                    })
                }
                
                if(response?.response.data === 'User not found'){
                    setErrors({
                        email: 'Email inválido'
                    })
                }
            }
        } else {
            setErrors(validationErrors);
        }
        setIsLoading(false)
    }

    return(
        <Background>
            <Modal>
                <Title>Login</Title>
                <Form onSubmit={submit}>
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
                </Form>
                <Button 
                    variant="link" 
                    color="light-gray"
                    onClick={()=>{
                        navigate('/createAccount')
                    }}
                >
                    Novo por aqui? Realize o cadastro
                </Button>
            </Modal>
        </Background>
    )
}