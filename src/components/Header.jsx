import './Header.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const PageHeader = (props) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  // Fazer a verificar se o user existe no banco de dados e retornar um token para ele
  const handleLogin = async(event) => {
    event.preventDefault();

    const dadosForm = {
      email: email,
      password: password
    }

    // Fazer um post com os dados de formulário do usuário e retornar o token dele se existir
    await axios
      .post('http://localhost:3001/authentication', dadosForm)
      .then((resp) => {
        props.setToken(resp.data.token)
      }).catch((error) => {
        window.alert('Falha na autenticação do usuário')
        // console.log(error.response)
      })
  }

  // Apagar o token do usuário e fazer ele voltar para a página de login
  const handleLogout = (event) => {
    event.preventDefault()
    props.setToken(null)
  }

  const verificarLogin = () => {
    if (!props.token) {
      return (
        <div className='usuario-deslogado'>
          <h1 className='usuario-deslogado-item1'>Login In:</h1>
          <form onSubmit={handleLogin}>
            <label>
              E-mail:
              <input
                name='email'
                type="email"
                onChange={handleEmail}
              />
            </label>
            <label>
              Password:
              <input
                name='password'
                type="password"
                onChange={handlePassword}
              />
            </label>
            <span>
              <button type="submit">Login</button>
            </span>
          </form>
        </div>
      )
    } else {
      return (
        <div className='usuario-logado'>
          <span>Nome do usuário</span>
          <button onClick={handleLogout}><Link to='/'>Sair</Link></button>
        </div>
      )
    }
  }

  return (
    <div>
      {verificarLogin()}
    </div>
  )
}

export default PageHeader