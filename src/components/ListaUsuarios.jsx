import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios'

import BotoesNavegacao from './Button'

export default function ListaUsuarios(props) {
  const [todosUsuarios, setTodosUsuarios] = useState([])

  // Define the function that fetches the data from API
  const fetchData = async () => {
    await axios
      .get('http://localhost:3001/allUsers', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': props.token
        }
      }).then((resp) => {
        setTodosUsuarios(resp.data.data)
      }).catch((error) => {
        window.alert('Usuário não autenticado')
      })
  };

  // Trigger the fetchData after the initial render
  useEffect(() => {
    fetchData()
  }, []);

  const pegaDados = () => (
    todosUsuarios.map(usuario => {
      return (
        <li key={usuario.id}>
          Id: {usuario.id} E-mail: {usuario.email} Password: {usuario.password}
        </li>
      )
    })
  )

  const verificarLogin = () => {
    if (!props.token) {
      return <Redirect to="/" />
    } else {
      return (
        <div>
          <BotoesNavegacao />
          <h2>Lista de todos os usuários cadastrados</h2>
          <div>
            {
              todosUsuarios.length > 0 && (
                <ul>
                  {pegaDados()}
                </ul>
              )
            }
          </div>
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