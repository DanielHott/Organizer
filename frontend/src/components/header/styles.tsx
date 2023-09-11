import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background: #f2e9e1;
    width: 100%;
    color: #d87a69;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    font-size: 9px;
    height: 80px;
    a {
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        text-decoration: none;
        display: flex;
        background-color: #f2e9e1;
        align-items: center;
        font-size: 25px;
        color: #d87a69;
    }
    .linkedin {
        cursor: pointer
        min-width: 50px;
        max-width: 200px;
        min-height: 30px;
        max-height: 120px;
    }
    img {
        min-width: 10px;
        max-width: 65px;
        min-height: 40px;
        max-height: 55px;
    }
    @media (min-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 500px) {
        height: 10vh;
}
`;
