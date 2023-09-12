import { useState } from 'react'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
=======
import { useDispatch } from 'react-redux';
>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
import { login } from '../../redux/apiCalls';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/")
  }
  return (
<<<<<<< HEAD
=======

>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <input style={{ marginBottom: 20, padding: 10 }}
        type="text"
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
      />
      <input style={{ marginBottom: 20, padding: 10 }}
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>Login</button>
    </div>
  )
}

export default Login