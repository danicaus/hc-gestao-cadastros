import styled from 'styled-components'

export const Form = styled.form`

    & > div {
        display: flex;
        flex-direction: column;

        padding: 1rem;

        text-align: left;

        & > input {
            margin: .8rem 0 .5rem;
            padding: .5rem;
            border-radius: .5rem;
            border: none;
        }

        & > span {
            color: #FF1111;
            visibility: hidden;
        }
        
        &.invalid {
        
            input {
                outline: .2rem solid #FF1111;
            }
            
            span {
                visibility: visible;
            }
        }
    }

`
