import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/");
  };
  return (
    <>
      <LoginForm onLogin={onLogin} />
    </>
  );
}

export default LoginPage;
