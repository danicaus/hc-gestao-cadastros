import * as S from './styles.js'
 

export function Home() {
    return (
        <S.Home>
        <S.Title> Gama Store </S.Title>
        <S.Subtitle>Gestão de cadastros</S.Subtitle>
        <div>
            <S.Button>Cadastrar cliente</S.Button>
            <S.Button>Cadastrar produto</S.Button>
            <S.Button>Visualizar clientes</S.Button>
            <S.Button>Visualizar produtos</S.Button>
        </div>
        </S.Home>
    )
}