import { useState, useRef,useEffect } from "react";\
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    if(email === "admin@gmail.com" && password === "admin1234"){
      alert("Login Successful");
      setIsAuth(true);
      navigate("/admin");
    }
    else{
      alert("Wrong email or password");
    }
  };
  return (
    <div>
    <h2>Login Page</h2>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleLogin}>Login</button>
    </div>


  );
}
export default Login;