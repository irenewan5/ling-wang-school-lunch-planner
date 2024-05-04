import { useContext } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import context from "../../libs/context";

function LoginPage() {
  const { setToken } = useContext(context);

  const onLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <>
      <LoginForm onLogin={onLogin} />
    </>
  );
}

export default LoginPage;
