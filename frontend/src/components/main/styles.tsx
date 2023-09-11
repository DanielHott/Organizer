import styled from "styled-components";

export const Container = styled.div`
    color: #d87a69;

`;

export const Logout = styled.div`
    button {
    margin-right: 20px;
    border: none;
    background-color: white;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    padding: 5px 20px;
    :hover {
        background-color: #d4cfcf;
    }
    }
    display: flex;
    justify-content: space-around;
    background: #f2e9e1;
    width: 100%;
    color: white;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    font-size: 10px;
    img {
        min-width: 80px;
        max-width: 200px;
        min-height: 50px;
        max-height: 120px;
    }
    @media (min-width: 1000px) {
        font-size: 14px;
    }
`;

export const Desconected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
`

export const ContentLoad = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #d87a69;
    h1 {
        margin-top: 15%;
    }
    margin-top: 25px;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        max-width: 100vw;
    }
    
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        margin-top: 15%;
        color: #d87a69;
    }
    margin-top: 25px;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        max-width: 100vw;
    }
    
`

export const NotFound = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    background-size: auto;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('/ng.png');
`

export const Transaction = styled.form`
    display: flex;
    flex-direction: column;
    width: 100vw;
    font-size: 14px;
    margin-top: 10%;
    text-align: center;
    height: 70vh;
    margin-bottom: 50px;
    padding: 20px;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
    border-radius: 3px;
    .date {
        padding: 20px;
    }
    button {
        margin-top: 20px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        font-family: 'Oswald', sans-serif;
        background: #f2e9e1;
        color: #d87a69;
        padding: 6px 90px;
        cursor: pointer;
        border: solid 1px white;
        :hover {
            background: #eed6c0;
        }
    }
    input, select {
        border: none;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 15px;
        margin-bottom: 10px;
        background-color: #f8f2ec;
        border-radius: 4px;
        padding: 6px 4px
    }
    @media (min-width: 1000px) {
        margin-top: 0%;
        text-align: left;
        margin-left: 5%;

        width: 40vw;
        input {
        border: none;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        background-color: #f8f2ec;
        border-radius: 4px;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 15px;
        margin-bottom: 10px;
        padding: 7px 50px
    }

        select {
            display: flex;
            justify-content: start;
            text-align: center;
    }
}
    @media (max-width: 500px) {
        margin-top: 5%
}
`;

export const TransactionHistory = styled.div`
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    margin-left: 5%;
    margin-top: -4%;
    #cada-conta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 11px;
        align-items: start;
        border-top: 15px solid #eed6c0;
        border-left: 1px solid #eed6c0;
        border-right: 1px solid #eed6c0;
        border-bottom: 1px solid #eed6c0;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    #contas {
    display: flex;
    flex-direction: column;
    width: 45vw;
    font-size: 15px;
    text-align: left;
    overflow-y: scroll;
    ::-webkit-scrollbar {
  height: 12px;
  width: 12px;
  border-radius: 5px;
  background-color: #e9e9e9;
}

::-webkit-scrollbar-thumb {
  background-color: #f2e9e1;
  border-radius: 5px;
  border: 1px solid #c0c0c0;
}

::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
}
    overflow-x: none;
    height: 70vh;
    font-family: 'Oswald', sans-serif;
    border-radius: 3px;
    button {
       margin-top: 30px;
        font-family: 'Oswald', sans-serif;
        background: #f2e9e1;
        color: #d87a69;
        padding: 6px 20px;
        border-radius: 5px;
        cursor: pointer;
        border: solid 1px white;
        :hover {
            background: #eed6c0;
        }
    }

    .mesSeguinte {
        color: #686666;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 11px;
        align-items: start;
        border-top: 15px solid #24c7f8;
        border-left: 1px solid #24c7f8;
        border-right: 1px solid #24c7f8;
        border-bottom: 1px solid #24c7f8;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .pendente {
        color: #686666;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 11px;
        align-items: start;
        border-top: 15px solid #fae319;
        border-left: 1px solid #fae319;
        border-right: 1px solid #fae319;
        border-bottom: 1px solid #fae319;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .vencida {
        color: #686666;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 11px;
        align-items: start;
        border-top: 15px solid red;
        border-left: 1px solid red;
        border-right: 1px solid red;
        border-bottom: 1px solid red;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .paga {
        color: #686666;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 11px;
        align-items: start;
        border-top: 15px solid #82ce78;
        border-left: 1px solid #82ce78;
        border-right: 1px solid #82ce78;
        border-bottom: 1px solid #82ce78;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    input {
        border: none;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 15px;
        margin-bottom: 10px;
        background-color: #eed6c0;
        border-radius: 4px;
        padding: 6px 4px
    }

    img {
        height: 150px;
        weight: 340px;
    }

    @media (min-width: 1000px) {
    }
}
@media (max-width: 500px) {
    margin-top: 5%;
    width: 100vw;
    text-align: center;
    #contas {
        width: 90vw;
    }
    #cada-conta {
    }
}
        
`;