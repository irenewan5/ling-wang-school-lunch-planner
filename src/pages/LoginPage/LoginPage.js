import { useContext } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import context from "../../libs/context";
import { useNavigate } from "react-router-dom";

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
    <>
      <LoginForm onLogin={onLogin} onSignUp={onSignUp} />
    </>
  );
}

export default LoginPage;
