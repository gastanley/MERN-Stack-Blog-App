import React, { useState } from 'react'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  // const changeInputHandler = (e) => {
  //   setUserData({
  //     return {...prevState, [e.target.name]: e.target.value}
  //   })
  // }

  return (
    <section className="register">
      <div className="container">
        <h2>Sign up</h2>
        <form action="" className="form register__form">
          <p className="form__error-message">This is an error message</p>
          <input type="text" name="name" placeholder="Full name" value={userData.name} />
          {/* onChange={changeInputHandler}/> */}
        </form>
      </div>
    </section>
  )
}

export default Register