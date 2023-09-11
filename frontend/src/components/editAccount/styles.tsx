import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Oswald', sans-serif;
    th{
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
    }
    td {
            border-bottom: 1px solid black;
            border-right: 1px solid;
            border-left: 1px solid
    }
    @media (min-width: 1000px) {
        font-size: 22px;

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

export const Content = styled.div`
    font-family: 'Oswald', sans-serif;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h3 {color: black};
    div {
        display: flex;
        justify-content:space-around;
        button {
        margin-bottom: 10px;
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
        margin-top: 10px;
        border: none;
        background: black;
        color: white;
        padding: 6px 20px;
        border-radius: 6px;
        :hover {
            background: #181818;
        }
            }
        }
        th{
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
    }
    @media (min-width: 1000px) {
        div {
            display: flex;
            justify-content:space-around;
            button {
        margin-bottom: 10px;
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
        margin-top: 10px;
        border: none;
        background: black;
        color: white;
        padding: 6px 20px;
        border-radius: 6px;
        :hover {
            background: #181818;
        }
            }
        }
        font-size: 22px;
        th{
        border: 1px solid #3E4C5E;
        padding: 5px;
        max-width: 32rem;
    }
}
`;



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
`;