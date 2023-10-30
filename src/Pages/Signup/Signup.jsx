import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  
  const { createUser } = useContext(AuthContext)

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log(user); 

        createUser( email, password )
          .then(res => {
          const newUser = res.user;
          console.log(newUser);
          })
          .catch(error => {
          console.error(error);
          })

        }
        return (
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="md:mr-14 w-1/2">
                <img src={img} alt="" />
              </div>
  
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <h1 className="text-xl md:text-3xl font-bold text-center">Sign Up Here</h1>
                  <form onSubmit={handleSignup}>
                  <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="name"
                        placeholder="Name"
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                  <p className="my-4 text-center">
                    Already have an Account, Please <Link 
                    className="text-red-500 md:font-semibold"
                    to="/login">Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
      );   
};

export default SignUp;