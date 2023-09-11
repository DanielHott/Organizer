import styled from "styled-components";

export const Container = styled.div`
    background-image: url('./organizer.jpg');
    height: 100vh;
    background-size: cover;
    @media (max-width: 500px) {
        background-image: url('./organizer.jpg');
        height: 90vh;
        background-size: cover;
    }
`;

export const Create = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 12%;
    font-family: 'Oswald', sans-serif;
    div {
        display: flex;
        flex-direction: column;
        text-align: center;
        color: white;

    }
    a {
        background: #f2e9e1;
        color: #d87a69;
        text-decoration: none;
        margin-bottom: 4%;
        border: solid 1px white;
        font-size: 18px;
        border-radius: 5px;
        padding: 5px 40px;
        :hover {
            background: #eed6c0;
        }
    }
    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 20%;
        div {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 20%;
    }

    a {
        background: #f2e9e1;
        color: #d87a69;
        text-decoration: none;
        margin-bottom: 4%;
        border: solid 1px white;
        font-size: 18px;
        border-radius: 5px;
        padding: 5px 70px;
        :hover {
            background: #eed6c0;
        }
    }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 6px 20px;
    justify-content: center;
    padding: 0px;

    input {
        padding: 10px;
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
        padding: 6px 80px;
        cursor: pointer;
        border: solid 1px white;
        :hover {
            background: #eed6c0;
        }
    }

    @media (min-width: 1000px) {
        justify-content: center;
        margin-top: 0%;
        text-align: left;
        input {
        border: none;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        background-color: #E8F0FE;;
        border-radius: 4px;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 18px;
        margin-bottom: 10px;
        padding: 10px 90px
    }
        button {
            padding: 8px 160px;
            font-family: 'Oswald', sans-serif;
            font-size: 18px;
            :hover {
                background: #eed6c0;
        }
        }
    }
`;

export const Back = styled.div`
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
    background: black;
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

