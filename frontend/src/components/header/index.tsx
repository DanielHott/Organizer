import { Container } from "./styles";

export function Header(text: { text: string } ) {
    return (
        <Container>
            <img src="./org.png" width="75" height="75" alt="ng-logo"/>
            <h1>{text.text}</h1>
            <a href="https://www.linkedin.com/in/danielhott" target="_blank" ><img className="linkedin" width="45" height="35" src="./linkedin.svg"/></a>
        </Container>
    )
}