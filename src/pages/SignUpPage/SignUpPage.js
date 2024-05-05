import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function SignUpPage() {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };

  const onSignedUp = () => {
    alert("User created, please login.");
    navigate("/login");
  };

  return (
    <>
      <SignUpForm onLogin={onLogin} onSignedUp={onSignedUp} />
    </>
  );
}

export default SignUpPage;
