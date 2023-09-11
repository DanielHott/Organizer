import { createContext, useState, ReactNode, useContext  } from "react";

type UserContextProps = {
    children: ReactNode,
}

interface Account {
    fornecedor: string,
    descricao: string,
    valor: number,
    vencimento: string,
    recorrente: boolean,
    status: string,
    id: number,
    user_id: number,
}

type UserContextType = {
    openEdit: boolean,
    setOpenEdit: (newState: boolean) => void,
    changes: Account,
    setChanges: (newState: Account) => void,
}

const initialValue = {
    setOpenEdit: () => {},
    openEdit: false,
    setChanges: () => {},
    changes: { 
        fornecedor: '',
        descricao: '',
        valor: 0,
        vencimento: '',
        recorrente: false,
        status: '',
        id: 0,
        user_id: 0,
    },
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children}: UserContextProps ) => {
    const [ openEdit, setOpenEdit ] = useState(initialValue.openEdit)
    const [ changes, setChanges  ] = useState(initialValue.changes)
    return (
        <UserContext.Provider value={{openEdit, setOpenEdit, changes, setChanges}}>
            {children}
        </UserContext.Provider>
    )
}

export function useAddContext() {
    const context = useContext(UserContext);
    const { openEdit, setOpenEdit, changes, setChanges } = context;
    return { openEdit, setOpenEdit, changes, setChanges };
  }
