import React from 'react'


const Login = () => {
  return (
    <section className="register-section padding-tb pb-0 " style={{height:"100vh"}}>
      <div className="container">
        <div className="row g-2 row-cols-lg-2 row-cols-1 align-items-center justify-content-center">
         
          <div className="col">
            <div className="section-wrapper">
              <h4>Sign in</h4>
              <form className="register-form">
             
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="reg-input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
