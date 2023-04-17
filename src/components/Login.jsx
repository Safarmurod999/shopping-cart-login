import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !email) return;
    setUser({ password: password, email: email,name:name });
    localStorage.setItem(
      "user",
      JSON.stringify({ password: password, email: email,name:name  })
    );
    navigate("/login");
  };
  const checkUserFromLocalStorage = (e) => {
    e.preventDefault();
    if (email == user.email && password == user.password)
      return navigate("/cartcontainer");
  };
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card bg-white">
                <div className="card-body p-5">
                  <form
                    className="mb-3 mt-md-4 loginForm"
                    onSubmit={user ? checkUserFromLocalStorage : handleSubmit}
                  >
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      {user ? "Login" : "Register"}
                    </h2>
                    <h6
                      className="fw-bold mt-3 mb-5 text-warning"
                      id="alertMsg"
                    >
                      Please enter your username and password!
                    </h6>
                    {!user ? (
                      <div className="mb-3">
                        <label htmlFor="text" className="form-label ">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label ">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="text"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label ">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <p className="small">
                      <a className="text-primary" href="forget-password.html">
                        Forgot password?
                      </a>
                    </p>
                    <div className="d-grid">
                      <button
                        className="btn btn-outline-dark"
                        type="submit"
                        id="loginBtn"
                      >
                        {user ? "Login" : "Register"}
                      </button>
                    </div>
                  </form>
                  <div>
                    <div className="mb-0  text-center">
                      Do you have an account?
                     {" "}
                     <Link to="/"><span className="text-primary fw-bold">{!user ? "Login": "Register"}</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
