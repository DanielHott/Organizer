import styled from "styled-components";

export const Container = styled.div`
    background-image: url('https://media.giphy.com/media/dIVcWJWkEm97vzoJkO/giphy.gif');
    height: 100vh;
    background-size: cover;
    @keyframes nomeDaAnimacao {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
    animation: nomeDaAnimacao 10s linear infinite; /* Exemplo de animação */
    @media (max-width: 500px) {
    height: 90vh;
    }
`;


export const FormArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8%;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Oswald', sans-serif;
    text-align: center;
    @media (min-width: 1000px) {
        display: flex;
        margin-top: 10%;
        text-align: center;
    }
    @media (max-width: 500px) {
        flex-direction: column;
        margin-top: 7%;

        div {
        display: flex;
        padding: 10px;
        flex-direction: column;
        text-align: center;
        margin-bottom: 10%;
    }
    }
`;

export const Back = styled.div`
    .back {
    margin-right: 20px;
    border: none;
    color: #d87a69;
    text-decoration: none;
    background-color: white;
    font-family: 'Oswald', sans-serif;
    border-radius: 4px;
    padding: 5px 20px;
    margin-right: 10%;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    input {
        padding: 10px;
        border: none;
        font-family: 'Oswald', sans-serif;
        border-radius: 5px;
        text-align: center;
        background: #E8F0FE;
        margin-bottom: 15px;
    }
    button {
        margin-top: 20px;
        border: none;

        border-radius: 5px;
        background: #f2e9e1;
        color: #d87a69;
        font-family: 'Oswald', sans-serif;
        padding: 10px;
        :hover {
            background-color: #d4cfcf;
        }
    }
    @media (min-width: 1000px) {
        justify-content: center;
        margin-top: -30px;
        margin-left: 10%;
        input {
            padding: 12px 100px;
            font-size: 16px;
        }
        button {
            padding: 10px 150px;
            font-size: 15px;
        }
    }
    @media (max-width: 500px) {
        input {
        padding: 10px 34px;
        border: none;
        border-radius: 5px;
        text-align: center;
        background: #E8F0FE;
        margin-bottom: 15px;
    }
        button {
        margin-top: 20px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        font-family: 'Oswald', sans-serif;
        background: #f2e9e1;
        color: #d87a69;
        padding: 6px 70px;
        cursor: pointer;
        border: solid 1px white;
        :hover {
            background: #eed6c0;
        }
    }
}
`;
