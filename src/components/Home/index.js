import * as S from './styles.js'

export function Home() {
    return (
        <>
        <S.Title> Gama Store </S.Title>
        <S.Subtitle>Gestão de cadastros</S.Subtitle>
        <div>
            <button>Cadastrar cliente</button>
            <button>Cadastrar produto</button>
            <button>Visualizar clientes</button>
            <button>Visualizar produtos</button>
        </div>
        </>
    )
}