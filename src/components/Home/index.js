import * as S from './styles.js'
import * as G from '../../Global'

export function Home() {
    return (
        <>
            <S.Title> Gama Store </S.Title>
            <S.Subtitle>Gestão de cadastros</S.Subtitle>
            <S.Navigation>
                <G.Button to="/cadastrar-cliente">Cadastrar cliente</G.Button>
                <G.Button to="/cadastrar-produto">Cadastrar produto</G.Button>
                <G.Button>Visualizar clientes</G.Button>
                <G.Button>Visualizar produtos</G.Button>
            </S.Navigation>
        </>
    )
}