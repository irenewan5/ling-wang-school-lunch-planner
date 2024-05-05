import api from "../../libs/api";

function SignUpForm({ onSignedUp, onLogin }) {
  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = {
        name: evt.target.name.value,
        email: evt.target.email.value,
        username: evt.target.username.value,
        password: evt.target.password.value,
      };
      await api.signUp(user);
      onSignedUp();
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <form className="signupform" onSubmit={onSubmit}>
      <div className="signupform__field">
        <label htmlFor="name">Name</label>
        <input id="name" />
      </div>
      <div className="signupform__field">
        <label htmlFor="email">Email</label>
        <input id="email" />
      </div>
      <div className="signupform__field">
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div className="signupform__field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div className="signupform__actions">
        <button type="button" onClick={onLogin}>
          Login
        </button>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default SignUpForm;
