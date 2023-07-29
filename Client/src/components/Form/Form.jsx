import React, { useState } from 'react'
import  './styles.css'
import { validations } from './validations'

const Form = ({login}) => {

  const [userData, setUserDAta] = useState({
      email: '',  
      password: ''
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    const { value, name } = event.target
    setUserDAta({
      ...userData,
      [name]: value
    })
    
    setErrors(validations({ ...userData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <div className="container">
        <div className='login'>
        
            <form className="login-input" onSubmit={handleSubmit}>
              <div className='titulo'>
                Rick And Morty
              </div>
              <label>Email</label>
              <input className='input-field' name='email' type="text" placeholder="Email" value={userData.email}             onChange={handleInputChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <label>Password</label>
            <input
              name='password'
              type="text" 
              placeholder="Ingrese tu password"
              value={userData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <button className='button' type="submit" >Enviar</button>
          
        </form>
        </div>
    </div>
  )
}

export default Form;