import { useState } from "react";
import { registrateUser } from "../../utils/requestUser";
import { Navigate } from 'react-router-dom';
import { Header } from "../header"
import { Container, Form, FormArea, Back } from "./styles"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../footer";


export function Registrate() {
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: '',
    });
    const [redirect, setRedirect ] = useState(false);
    const loginSubmit = async (e: any) => {
        e.preventDefault();
        const { username, password } = loginInfo;
        const hasUpper = (str: string) => /[A-Z]/.test(str);
        const hasNumber = (str: string) => /[0-9]/.test(str);
        if(hasNumber(password) && hasUpper(password) && username.length >= 3){
           const toastLoad = toast.loading('Carregando...')
           const request = await registrateUser(username, password)
           if(request === 200) {
            toast.dismiss(toastLoad);
            toast.success('Usuário criado com sucesso.')
           }
           if(request === 400) {
            toast.error('Já existe um usuário com este nome!')
            toast.dismiss(toastLoad);
           }
        }
        if(!hasNumber(password) || !hasUpper(password) || username.length < 3)
        return toast.error('Nome ou senha inválidos!')
    }

    if(redirect) {
        return (
            <div>
                <Navigate to="/" />
            </div>
        )
    }

    return (
    <div>
        <Container>
            <Back>
            <Header text="Crie sua conta."/>
            <a href="/" className="back">Voltar</a>
            </Back>
            <FormArea>
            <div>
            <h3>O nome do usuário deve ter mais de 3 letras.</h3>
            <h3>A senha deve possuir mais de 8 letras, ter um número e uma letra maiúscula.</h3>
            </div>
            <Form onSubmit={(e) => loginSubmit(e)}>
            <input required onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value.trim() } )} type="text" placeholder="Username"></input>
            <input required onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value.trim() } )} type="password" placeholder="Password"></input>
            <button type="submit">Cadastrar</button>
            </Form>
            </FormArea>
            <ToastContainer />
        </Container>
            <Footer type={1}/>
        </div>
    )
}