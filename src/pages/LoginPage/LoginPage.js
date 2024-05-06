import { useContext } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import context from "../../libs/context";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

function LoginPage() {
  const { setToken } = useContext(context);
  const navigate = useNavigate();

  const onLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const onSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="loginpage">
      <h2>Login</h2>
      <LoginForm onLogin={onLogin} onSignUp={onSignUp} />
    </div>
  );
}

export default LoginPage;
