import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'

const BotoesNavegacao = () => {
    return (
        <div className='flex-container'>
            <button className='button1'><Link to='/'>HomePage</Link></button>
            <button className='button1'><Link to='/formularioCadastro'>Formulário de Cadastro para a vacinação</Link></button>
            <button className='button1'><Link to='/listaUsuarios'>Listar os usuários já cadastrados</Link></button>
        </div>
    )
}

export default BotoesNavegacao