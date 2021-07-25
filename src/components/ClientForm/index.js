import * as S from './styles.js'
import axios from 'axios'
import { useState } from 'react'

export function ClientForm() {
    const [ uf, setUf] = useState()
    const [ city, setCity] = useState()
    const [ street, setStreet] = useState()
    const [ neighborhood, setNeighborhood] = useState()

    function handleForm(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        
        const client = {
            name: formData.get('clientName'),
            cpf: formData.get('clientDocument'),
            email: formData.get('clientEmail'),
            telephone: formData.get('clientTel'),
            cep: formData.get('clientAdressCep'),
            city: formData.get('clientAdressCity'),
            uf: formData.get('clientAdressState'),
            neighborhood: formData.get('clientAdressNeighborhood'),
            street: formData.get('clientAdressStreet'),
            number: formData.get('clientAdressStreetNumber'),
            complement: formData.get('clientAdressComplement')
        }

        localStorage.setItem("Client", JSON.stringify(client))
        
    }

    function handleValidation(input) {
        const validation = input.validity.valid

        if(!validation){
            input.parentElement.classList.add('invalid')
        } else {
            input.parentElement.classList.remove('invalid')
        }
    }

    function handleCEP(input){
        const cep = input.value.replace(/\D/g, '')
        const url = `https://viacep.com.br/ws/${cep}/json/`
        
        handleValidation(input)
        
        if(!input.validity.patternMismatch && !input.validity.valueMissing) {
            axios.get(url)
            .then(response => response.data)
            .then(
                data => {
                    if(data.erro) {
                        input.setCustomValidity('Não foi possível buscar o endereço')
                        input.parentElement.classList.add('invalid')
                    }
                    input.setCustomValidity('')
                    handleAddress(data)
                }
            )
        }  
    }

    function handleAddress(data) {
        setUf(data.uf)
        setCity(data.localidade)
        setStreet(data.logradouro)
        setNeighborhood(data.bairro)
    }

    return (
        <>
            <h2>Cadastrar cliente</h2>
            <S.Form onSubmit={handleForm}>
                <div>
                    <label htmlFor="clientName">Nome</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" name="clientName" minLength="10" required id="clientName"/>
                    <span>Preencha com o nome completo</span>
                </div>
                <div>
                    <label htmlFor="clientDocument">CPF (somente números)</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" pattern="[0-9]{11}" name="clientDocument" minLength="11" required id="clientDocument"/>
                    <span>Preencha com um CPF válido</span>
                </div>
                <div>
                    <label htmlFor="clientEmail">E-mail</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="email" pattern=".+@.+\.com" name="clientEmail" required id="clientEmail"/>
                    <span>Preencha com um e-mail válido</span>
                </div>
                <div>
                    <label htmlFor="clientTel">Telefone</label>
                    <input type="text" name="clientTel" id="clientTel" placeholder="(xx)xxxx-xxxx"/>
                    <span>Preencha com um telefone</span>
                </div>
                <div>
                    <label htmlFor="clientAdressCep">CEP</label>
                    <input onBlur={(e) => handleCEP(e.target)} type="text" pattern="[\d]{5}-?[\d]{3}" name="clientAdressCep" required id="clientAdressCep"/>
                    <span>Preencha com um CEP válido</span>
                </div>
                <div>
                    <label htmlFor="clientAdressCity">Cidade</label>
                    <input type="text" name="clientAdressCity" id="clientAdressCity" value={city} readonly/>
                    <span>Preencha com um valor válido</span>
                </div>
                <div>
                    <label htmlFor="clientAdressState">UF</label>
                    <input type="text" pattern="[A-Z]{2}" name="clientAdressState" maxLength="2" id="clientAdressState" value={uf} readonly/>
                    <span>Preencha com um valor válido</span>
                </div>
                <div>
                    <label htmlFor="clientAdressNeighborhood">Bairro</label>
                    <input type="text" name="clientAdressNeighborhood" id="clientAdressNeighborhood" value={neighborhood} readonly/>
                    <span>Preencha com um valor válido</span>
                </div>
                <div>
                    <label htmlFor="clientAdressStreet">Rua</label>
                    <input type="text" name="clientAdressStreet" id="clientAdressStreet" value={street} readonly/>
                    <span>Preencha com um valor válido</span>
                </div>
                <div>
                    <label htmlFor="clientAdressStreetNumber">Número</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" required name="clientAdressStreetNumber" id="clientAdressStreetNumber"/>
                    <span>Preencha com um valor válido</span>
                </div>
                <div>
                    <label htmlFor="clientAdressComplement">Complemento</label>
                    <input onBlur={(e) => handleValidation(e.target)} type="text" name="clientAdressComplement" id="clientAdressComplement"/>
                    <span>Preencha com um valor válido</span>
                </div>
                <button type="submit">Cadastrar</button>
            </S.Form>
            <button>Cancelar</button>
        </>
    )
}