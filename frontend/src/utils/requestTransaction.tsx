
export const addAccount = (fornecedor: string, descricao: string, valor: number, vencimento: string, status: string, user_id: string, recorrente: boolean) => {
    const url = `https://accounts-backend-n843.onrender.com/create`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            fornecedor, descricao, valor, vencimento, status, user_id, recorrente
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}

export const editAccount = (id:number, fornecedor: string, descricao: string, valor: number, vencimento: string, status: string, user_id: number, recorrente: boolean) => {
    const url = `https://accounts-backend-n843.onrender.com/edit`
    try {
    const request = fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ 
            fornecedor, descricao, valor, vencimento, status, user_id, recorrente, id
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}