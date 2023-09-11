import { Container, Create, Form, Back } from "./styles";
import { useState } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Navigate } from 'react-router-dom';
import { loginUser } from "../../utils/requestUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Login() {
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
            const request: any = await loginUser(username, password)
           if(request.message) {
            toast.dismiss(toastLoad);
            return toast.error(`${request.message}`)
           }
           toast.dismiss(toastLoad);
           localStorage.setItem('token', request.token)
           return setRedirect(true);
        }
        return toast.error('Usuário ou senha inválidos.')
    }

    if(redirect) {
        return (
                <Navigate to="/main" />
        )
    }
    return (
    <div>
        <Container>
            <Header text="Experimente o poder da organização."/>
            <Create>
            <div>
            <h1>Crie sua conta</h1>
            <a href="/registrate" >Cadastrar</a>
            </div>
            <Form onSubmit={(e) => loginSubmit(e)}>
            <input required onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value.trim() } )} type="text" placeholder="Username"></input>
            <input required onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value.trim() } )} type="password" placeholder="Password"></input>
            <button type="submit">Entrar</button>
            </Form>
            </Create>
            <ToastContainer />
        </Container>
        <Footer type={1}/>
    </div>
    )
}