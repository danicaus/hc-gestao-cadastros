import styled from 'styled-components'

export const Input = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;

    text-align: left;

    & > input {
        margin: .8rem 0 .5rem;
        padding: .5rem;
        border-radius: .5rem;
        border: none;
        width: 100%;
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
`

export const Button = styled.button`
    margin: 1rem;
    width: 40%;

    font-size: 2rem;
    font-weight: 400;
    color: #222222;

    background-color: #088008;

    border: none;
    border-radius: .5rem;

    padding: .8rem;

    cursor: pointer;

    text-decoration: none;
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
`