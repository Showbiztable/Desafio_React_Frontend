import React, { useState } from 'react'
import axios from 'axios'

import BotoesNavegacao from './Button'

import './Button.css'
import './FormularioCadastro.css'


const FormularioCadastro = (props) => {
  const [formData, setFormData] = useState([])

  const handleChange = (type, value) => {
    setFormData({
      ...formData,
      [`${type}`]: value,
    });
  }

  // Fazer um post com o token do usuário para verificar se é válido
  const handleAuthentication = async (event) => {
    await axios
      .get('http://localhost:3001/authentication/token/validation', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': props.token
        }
      }).catch((error) => {
        window.alert('Usuário não está autenticado')
      })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    handleAuthentication()

    // Lógica enviar os dados do form para validar no BACKEND
    await axios
      .post('http://localhost:3001/vacinacao', formData)
      .then((resp) => {
        // console.log(formData)
        // console.log(resp)
        window.alert(resp.data)
      }).catch((error) => {
        window.alert('Problema no formulário enviado ao sistema')
      })
  }

  const usuarioLogado = () => {
    return (
      <div>
        <h1>Formulário de Agendamento da Vacina</h1>
        <form className='form-container' onSubmit={handleSubmit}>
          <label>
            Nome:<input
              name='username'
              type="text"
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </label>
          <label>
            E-mail:<input
              name='email'
              type="email"
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </label>
          <label>
            Data de Nascimento:<input
              name='dataNascimento'
              type="date"
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </label>
          <label>
            Telefone:<input
              name='telefone'
              type="tel"
              placeholder='(01) 23456-7890'
              pattern='[0-9]{2}-[0-9]{5}-[0-9]{4}'
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </label>
          <label>
            CEP:<input
              name='cep'
              type='text'
              maxLength='9'
              placeholder='13245-678'
              pattern='\d{5}-\d{3}'
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </label>
          <div>
            <span style={{ paddingLeft: '10px' }}>Tipo Sanguíneo:</span>
            <select
              name='tipoSanguineo'
              onChange={(event) => handleChange(event.target.name, event.target.value)}
              style={{ width: '50px', marginLeft: '10px' }}
            >
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Continuar daqui Lucas */}
          <button style={{ width: '50px' }} type="submit">Submit</button>
        </form>
      </div>
    )
  }

  const usuarioDeslogado = () => {
    return (
      <div>
        <p>Para se cadastrar é necessário estar logado no sistema</p>
      </div>
    )
  }

  return (
    <div>
      <BotoesNavegacao />
      {props.token ? usuarioLogado() : usuarioDeslogado()}
    </div>
  )
}

export default FormularioCadastro