import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
    width: 50%;
    
    margin: 5rem auto;

    text-align: center;
    color: #DDDDDD;
    font-size: 1.5rem;

    background-color: #FFFFFF12;

    padding: 5rem 3rem;
    border-radius: .5rem;
`

export const Button = styled(Link)`
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
    text-align: center;
    line-height: normal;
`