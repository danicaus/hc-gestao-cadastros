import * as S from './styles'
import * as G from '../../Global'

export function ProductForm() {

    function handleForm(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        const products = localStorage.getItem("Products")
        const id = products ? products.length+1 : 1
        
        const product = {
            id: id,
            name: formData.get('productName'),
            category: formData.get('productCategory'),
            price: formData.get('productPrice'),
            quantity: formData.get('productQuantity'),
        }

        localStorage.setItem("Products", [products, JSON.stringify(product)])
        
    }

    function handleValidation(input) {
        const validation = input.validity.valid

        if(!validation){
            input.parentElement.classList.add('invalid')
        } else {
            input.parentElement.classList.remove('invalid')
        }
    }

    return (
        <>
            <h2>Cadastrar Produto</h2>
            <form onSubmit={handleForm}>
                <S.Input>
                    <label htmlFor="productName">Nome</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" name="productName" required id="productName"/>
                    <span>Preencha o nome do produto</span>
                </S.Input>
                <S.Input>
                    <label htmlFor="productCategory">Categoria</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" name="productCategory" required id="productCategory"/>
                    <span>Preencha a categoria do produto</span>
                </S.Input>
                <S.Input>
                    <label htmlFor="productPrice">Preço</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="number" min="0" name="productPrice" required id="productPrice"/>
                    <span>Preencha o preço do produto</span>
                </S.Input>
                <S.Input>
                    <label htmlFor="productQuantity">Quantidade em estoque</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="number" min="1" name="productQuantity" required id="productQuantity"/>
                    <span>Preencha a quantidade de itens em estoque</span>
                </S.Input>
                <S.Navigation>
                    <S.Button type="submit">Cadastrar</S.Button>
                    <G.Button to="/">Cancelar</G.Button>
                </S.Navigation>
            </form>
        </>
    )
}