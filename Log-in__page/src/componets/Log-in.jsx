import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Log-in.css';

const LogIn = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);


  const resetForm = () => {
  setName("");
  setLastName("");
  setEmail("");
  setPassword("");
        };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Email must contain @");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    alert("Login successful!");
    resetForm()
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      alert("First name must be at least 2 characters");
      return;
    }

    if (lastName.trim().length < 2) {
      alert("Last name must be at least 2 characters");
      return;
    }

    if (!email.includes("@")) {
      alert("Email must contain @");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Signup successful!");
    resetForm();
    setShowSignup(false);
  };


    const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>

        <div class="layer layer1"></div>
        <div class="layer layer2"></div>
        <div class="layer layer3"></div>
    <div className="container-fluid">

      <div className="row justify-content-center">
        <div className="col-md-12 d-flex justify-content-center align-items-center vh-100">

          <div className="Login_card">
            <div className="card-header">
              <h2 className="text-center header-text">
                {showSignup ? "Sign-up" : "Log-in"}
              </h2>
            </div>

            <div className="card-body">
              
              {!showSignup && (
                <form onSubmit={handleLogin}>
                  <div className="inputs">
                    <p>Email</p>
                    <input 
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="inputs">
                    <p>Password</p>
                    <input 
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button className="login-btn" type="submit">
                    Login
                  </button>
                </form>
              )}

              {showSignup && (
                <form onSubmit={handleSignup}>
                  
                  <div className="inputs">
                    <p>First Name</p>
                    <input 
                      type="text"
                      placeholder="Enter your first name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="inputs">
                    <p>Last Name</p>
                    <input 
                      type="text"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="inputs">
                    <p>Email</p>
                    <input 
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="inputs">
                    <p>Password</p>
                    <input 
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button className="login-btn" type="submit">
                    Sign Up
                  </button>
                </form>
              )}

            </div>

            <p>
              {showSignup ? (
                <>
                  Already have an account?{" "}
                  <span 
                    onClick={() => setShowSignup(false)}
                    style={{cursor: "pointer", color: "blue"}}
                  >
                    Log-in
                  </span>
                </>
              ) : (
                <>
                  You don't have an account?{" "}
                  <span 
                    onClick={() => setShowSignup(true)}
                    style={{cursor: "pointer", color: "blue"}}
                  >
                    Sign-up
                  </span>
                </>
              )}
            </p>

          </div>

        </div>
      </div>
    </div>
    </>
    
  );
};

export default LogIn;
