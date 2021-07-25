import {Form} from './styles'

export function ProductForm() {

    function handleForm(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        
        const client = {
            name: formData.get('productName'),
            category: formData.get('productCategory'),
            price: formData.get('productPrice'),
            quantity: formData.get('productQuantity'),
        }

        localStorage.setItem("Product", JSON.stringify(client))
        
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
            <Form onSubmit={handleForm}>
                <div>
                    <label htmlFor="productName">Nome</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" name="productName" required id="productName"/>
                    <span>Preencha o nome do produto</span>
                </div>
                <div>
                    <label htmlFor="productCategory">Categoria</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" name="productCategory" required id="productCategory"/>
                    <span>Preencha a categoria do produto</span>
                </div>
                <div>
                    <label htmlFor="productPrice">Preço</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="number" min="0" name="productPrice" required id="productPrice"/>
                    <span>Preencha o preço do produto</span>
                </div>
                <div>
                    <label htmlFor="productQuantity">Quantidade em estoque</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="number" min="1" name="productQuantity" required id="productQuantity"/>
                    <span>Preencha a quantidade de itens em estoque</span>
                </div>
                <button type="submit">Cadastrar</button>
            </Form>
            <button>Cancelar</button>
        </>
    )
}