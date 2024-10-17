import loginIcon from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="nav-right"
      onClick={handleLoginClick}
      style={{ cursor: "pointer" }}
    >
      <img src={loginIcon} alt="login icon" />
    </div>
  );
}

export default Login;
