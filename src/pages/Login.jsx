import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, resetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail]=useState('');



  const handleLogin = (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user.displayName;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`${user} Login Successful!`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  const handleForget=()=>{
    resetPassword(email)
    .then(()=>{
      console.log('password reset mail send')
    })
    .catch(error=>console.log(error.code))

  }


  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a onClick={handleForget} className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>

      {/* Toaster should be at top level */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Default options
          className: '',
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />

    </div>
  );
};

export default Login;
