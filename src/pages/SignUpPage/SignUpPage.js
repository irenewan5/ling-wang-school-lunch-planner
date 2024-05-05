import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignUpPage.scss";

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
    <div className="signuppage">
      <SignUpForm onLogin={onLogin} onSignedUp={onSignedUp} />
    </div>
  );
}

export default SignUpPage;
