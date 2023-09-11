import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #f2e9e1;
    color: #d87a69;
    bottom: 0;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    font-size: 9px;
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

export const Container2 = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    margin-top: 20px;
    flex-direction: row;
    background: #f2e9e1;
    color: #d87a69;
    bottom: 0;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    font-size: 9px;

    @media (min-width: 1000px) {
        font-size: 14px;
    }
`;

export const Tabela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;

    div {
        display: flex;
        max-height: 20px;
        align-items: center;
        justify-content: start;
    }
`;
