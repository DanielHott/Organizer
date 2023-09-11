import { Header } from "../header";
import { useAddContext } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Container, Content, Back, Transaction } from "./styles";
import { editAccount } from "../../utils/requestTransaction";
import { converterParaYYYYMMDD } from "../../utils/helpers";

interface Account {
    id: number,
    fornecedor: string,
    descricao: string,
    valor: number,
    vencimento: string,
    recorrente: boolean,
    status: string,
    user_id: number
}

export function EditAccount() {
    const { openEdit, setOpenEdit, changes } = useAddContext();
    const [redirect, setRedirect] = useState(false);
    const [ accountInfo, setaccountInfo  ] = useState({ 
        fornecedor: changes.fornecedor,
        descricao: changes.descricao,
        valor: changes.valor,
        vencimento: changes.vencimento,
        recorrente: Boolean(changes.recorrente),
        status: changes.status,
        id: changes.id,
        user_id: changes.user_id
     });
     const { fornecedor, descricao, valor, vencimento, status, user_id, recorrente, id } = accountInfo;
     const meuVencimento = converterParaYYYYMMDD(vencimento);
     const submitTransaction = async (e: any) => {
                e.preventDefault();
                const addedAccount: any = await editAccount( id, fornecedor, descricao, valor, vencimento, status, user_id, recorrente);
                const toastLoad = toast.loading('Carregando...')
                if(addedAccount) {
                    setRedirect(true)     
                }
                toast.dismiss(toastLoad)
                toast.success('Conta alterada.');
            return (
                <Navigate to="/main" />
            );     
            }
            
            
            if (redirect) {
                return (
                    <Navigate to="/main" />
                );
              }
    return (
        <Container>
            <Back>
            <Header text="Alterar conta" />
            <button onClick={() => setRedirect(true)} > Voltar</button>
            </Back>
            <Content>
                <Transaction onSubmit={(e) => submitTransaction(e)}>
                Fornecedor:
                <input required onChange={(e) => setaccountInfo({...accountInfo, fornecedor: e.target.value } )} name="user" type="text" defaultValue={fornecedor}></input>
                Descrição:
                <input required onChange={(e) => setaccountInfo({...accountInfo, descricao: e.target.value } )} name="value" type="text" defaultValue={descricao}></input>
                Valor:
                <input required onChange={(e) => setaccountInfo({...accountInfo, valor: Number(e.target.value) } )} name="value" type="number" defaultValue={valor}></input>
                Data de Vencimento:
                <input className="date" required onChange={(e) => setaccountInfo({...accountInfo, vencimento: e.target.value } )} name="value" type="date" defaultValue={meuVencimento}></input>
                É recorrente? (Todo mês):
                <input className="check"  onChange={(e) => setaccountInfo({...accountInfo, recorrente: Boolean(e.target.checked) } )} name="value" type="checkbox" checked={recorrente}>

                </input>
                Status:
                <select
                onChange={(e) => setaccountInfo({...accountInfo, status: e.target.value } )}
                value={status}
              >
                <option value="0">Já pagou a conta?</option>
                <option value="Já Paguei!">✅ Já Paguei.</option>
                <option value="Ainda Não Paguei">🕗 Ainda Não Paguei.</option>
                <option value="Vencida!">⚠️ Vencida.</option>
              </select>
                <button type="submit">Salvar</button>
            </Transaction>
            </Content>
        </Container>
    )
}