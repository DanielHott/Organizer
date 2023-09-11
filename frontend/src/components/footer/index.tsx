import { Container, Container2, Tabela } from "./styles";

export function Footer(type: any) {
  console.log(type)
    if(type.type == '1') {
    return (
        <Container>
      <p>&copy; {new Date().getFullYear()} Daniel Hott. All rights reserved.</p>
        </Container>
    )
    }
    else {
      return (
        <Container2>
                <Tabela>
                Tabela de cores: 
                <div><h3 style={{color: '#24c7f8'}}>¬¬¬</h3>: Não se preocupe, esta conta só vence mês que vem. </div>
                <div><h3 style={{color: 'yellow'}}>¬¬¬</h3>: Tenha atenção, esta conta está próxima do vencimento.</div>
                <div><h3 style={{color: 'red'}}>¬¬¬</h3>: Esta conta venceu, se apresse para evitar os juros.</div>
                <div><h3 style={{color: '#82ce78'}}>¬¬¬</h3>: Esta conta já foi paga, não se preocupe.</div>
                </Tabela>
                <p>&copy; {new Date().getFullYear()} Daniel Hott. All rights reserved.</p>
        </Container2>
      )
    }
}