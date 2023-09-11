import { Container, Desconected, Logout, NotFound, ContentLoad, Transaction, Content, TransactionHistory } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../header";
import { checkToken } from "../../utils/requestUser";
import { allAccounts, deleteAccounts } from "../../utils/requestAccount";
import { addAccount, editAccount  } from "../../utils/requestTransaction";
import { formatDate, somarUmMes } from "../../utils/helpers";
import { Navigate } from "react-router-dom";
import { EditAccount } from "../editAccount";
import { useAddContext } from "../../contexts/UserContext";
import { Footer } from "../footer";
import { ToastContainer, toast } from 'react-toastify';

interface Account {
    id: number,
    fornecedor: string,
    descricao: string,
    valor: number,
    vencimento: string,
    recorrente: boolean,
    status: string
    user_id: number,
}

export function Main() {
    const [ render, setRender ] = useState(0);
    const [ out, setOut ] = useState(false);
    const [ notify, setNotify ] = useState(false);
    const { openEdit, setOpenEdit, setChanges } = useAddContext();
    const [ accountInfo, setaccountInfo ] = useState({
        fornecedor: '',
        valor: 0,
        status: '',
        descricao: '',
        vencimento: '',
        recorrente: false,
    });
    const [ myAccounts, setMyAccounts ] = useState([]);
    const [ userName, setUserName ] = useState('');

    const checkingToken = async (token: string) => {
        const response: any = await checkToken(token);
        return response;
    }

    const deleteAccount = async (id: number, username: string) => {
        const desejaExcluir = window.confirm("Tem certeza que deseja excluir este item?");
        if (desejaExcluir) {
            // O usuário confirmou a exclusão, execute a ação de exclusão aqui
            const response: any = await deleteAccounts(id);
            toast.success(`Menos uma conta! A conta do fornecedor ${username} foi excluída.`);
            validateToken();
            return response;
          } else {
            // O usuário cancelou a exclusão, não faça nada
          }
    }

    const validateToken = async () => {
        const myToken = localStorage.getItem('token');
        if(myToken){
        const check = await checkingToken(`${myToken}`);
        if(check.checking.userId) {
            setRender(1);
            const accounts: any = await allAccounts(check.checking.userId);
            setMyAccounts(accounts);
            setUserName(check.checking.userId)
        }
        if(!check.checking.userId) setRender(2)
            }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setRender(4);
        setOut(true);
    }

    !notify && myAccounts && myAccounts.map(async (account: any) => {
        const diaVencimento = parseInt(formatDate(account.vencimento, 1 ).substring(0, 2), 10);
        const diaHoje = formatDate(String(new Date()), 2).substring(0, 2);
        const mesVencimento = (formatDate(account.vencimento, 1 ).substring(3, 5))
        const mesHoje = formatDate(String(new Date()), 2).substring(3, 5);
        if(account.recorrente  && account.status === 'Já Paguei!' && Number(mesHoje) >= Number(mesVencimento)) {
            await editAccount(account.id, account.fornecedor, account.descricao, account.valor, somarUmMes(account.vencimento), 'Ainda não Paguei', account.user_id, account.recorrente);
            toast.dark(`Sua conta do fornecedor ${account.fornecedor} deste mês foi paga. A data para o próximo pagamento foi atualizada para o mês posterior.`, { autoClose: 16000 })
            validateToken();
        }
        if(Number(diaVencimento) - Number(diaHoje) > 1 && Number(diaVencimento) - Number(diaHoje) <= 5 && account.status !== 'Já Paguei!' &&  Number(mesHoje) == Number(mesVencimento)) toast.warn(`A sua conta de ${account.fornecedor} está próxima do vencimento (${formatDate(account.vencimento, 1 )}).`)
        if(formatDate(account.vencimento, 1 ) === formatDate(String(new Date()), 2)&&  Number(mesHoje) == Number(mesVencimento)) toast.warn(`A sua conta de ${account.fornecedor} vence hoje.`)
        if(Number(diaVencimento) - Number(diaHoje) < 0 && account.status == 'Ainda Não Paguei' &&  Number(mesHoje) == Number(mesVencimento)) toast.error(`A sua conta de ${account.fornecedor} está vencida!.`) 
        if(account.status == 'Ainda Não Paguei' &&  Number(mesHoje) > Number(mesVencimento)) toast.error(`A sua conta de ${account.fornecedor} está vencida!.`) 
        if(account.status === 'Vencida!') toast.error(`A sua conta de ${account.fornecedor} está vencida!.`) 
        return setNotify(true)})
   
    const submitTransaction = async (e: any) => {
        e.preventDefault();
        const myToken = localStorage.getItem('token');
        const toastLoad = toast.loading('Carregando...')
        if(myToken){
        const check = await checkingToken(`${myToken}`);
        const addedAccount: any = await addAccount(accountInfo.fornecedor, accountInfo.descricao, accountInfo.valor, accountInfo.vencimento, accountInfo.status, check.checking.userId, accountInfo.recorrente );
        if(addedAccount.id) {
            toast.dismiss(toastLoad)
            toast.success('Conta adicionada.');
            validateToken();
        }
        if(addedAccount.message === 'Não pode transferir para si mesmo.') return toast.error(`You can't transfer for yourself!`)
        if(addedAccount.message) return toast.error('Username not find')
    }}

    useEffect(() => {
        validateToken();
    }, []);

    const setOpenNewEdit = (account: Account) => {
        const { fornecedor, descricao, recorrente, status, valor, vencimento, id, user_id } = account;
        setChanges({fornecedor, descricao, recorrente, status, valor, vencimento, id, user_id })
        setOpenEdit(true);
    }
    if(openEdit) {
        setOpenEdit(false);
        return (
            <Navigate to="/edit"/>
        )
    }

    if(render === 1) {
    return (
        <Container>
            <Logout>
            <Header text={`Contas: ${myAccounts.length}`} />
            <button onClick={() => logout()}>Sair</button>
            </Logout>
            <Content>
            <Transaction onSubmit={(e) => submitTransaction(e)}>
                <h1>Cadastre suas contas</h1>
                Fornecedor:
                <input required onChange={(e) => setaccountInfo({...accountInfo, fornecedor: e.target.value } )} name="user" type="text" placeholder="Ex: Amazon"></input>
                Descrição:
                <input required onChange={(e) => setaccountInfo({...accountInfo, descricao: e.target.value } )} name="value" type="text" placeholder="Ex: Parcela do Carro"></input>
                Valor:
                <input required onChange={(e) => setaccountInfo({...accountInfo, valor: Number(e.target.value) } )} name="value" type="number" placeholder="Valor da Conta"></input>
                Data de Vencimento:
                <input className="date" required onChange={(e) => setaccountInfo({...accountInfo, vencimento: e.target.value } )} name="value" type="date"></input>
                É recorrente? (Todo mês):
                <input className="check"  onChange={(e) => setaccountInfo({...accountInfo, recorrente: Boolean(e.target.checked) } )} name="value" type="checkbox"></input>
                Status:
                <select
                onChange={(e) => setaccountInfo({...accountInfo, status: e.target.value } )}
                defaultValue="{userInformations.status}"
              >
                <option value="0">Já pagou a conta?</option>
                <option value="Já Paguei!">✅ Já Paguei.</option>
                <option value="Ainda Não Paguei">🕗 Ainda Não Paguei.</option>
                <option value="Vencida!">⚠️ Vencida.</option>
              </select>
                <button type="submit">Salvar</button>
            </Transaction>
            <TransactionHistory>
                <h1>Minhas Contas:</h1>
                <div id="contas">
                    {myAccounts && myAccounts.map((account: any) => {
                        const mesVencimento = (formatDate(account.vencimento, 1 ).substring(3, 5))
                        const mesHoje = formatDate(String(new Date()), 2).substring(3, 5);
                        return (
                            <div id="cada-conta" className={account.status === 'Já Paguei!' ? 'paga' : account.status === 'Vencida!' ? 'vencida' : Number(mesHoje) < Number(mesVencimento) ? 'mesSeguinte' : 'pendente'} key={account.id}>
                                <div>
                                <p>Fornecedor: {account.fornecedor}</p>
                                <p>Descrição: {account.descricao}</p>
                                <p>Valor: R${account.valor}</p>
                                <p>Data de Vencimento: {formatDate(account.vencimento, 1)}</p>
                                <p>Status: {account.status}</p>
                                <p>Recorrente: {account.recorrente ? 'Sim' : 'Não'}</p>
                                </div>
                                <div id="buttons">
                                <button onClick={() => deleteAccount(account.id, account.fornecedor)}>Excluir</button>
                                <button onClick={() => setOpenNewEdit(account)}>Editar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </TransactionHistory>
            </Content>
            <Footer />
            <ToastContainer />
        </Container>
    )
    }
    if(render === 2)
    return (
        <div>
            <Header text="Vixe!" />
            <Desconected>
            <h1>Disconnected!</h1>
            <a href="/"> Voltar à tela de login</a>
            </Desconected>
        </div>
    )

    if(out) {
        return (
            <div>
                <Navigate to="/" />
            </div>
        )
    }


    return (
        <div>
            <Logout>
            <Header text={`Contas: ${myAccounts.length}`} />
            <button onClick={() => logout()}>Sair</button>
            </Logout>
        <ContentLoad>
            <h1>Carregando...</h1>
            Caso nada aconteça, sua seção expirou. Por favor, refaça o Login.
        </ContentLoad>
        </div>
    )

}