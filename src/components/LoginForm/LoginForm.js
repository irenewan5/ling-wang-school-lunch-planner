import api from "../../libs/api";

function LoginForm({ onLogin, onSignUp }) {
  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const token = await api.createToken(
        evt.target.username.value,
        evt.target.password.value
      );
      onLogin(token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__field">
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div className="form__field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div className="loginform__actions">
        <button type="button" onClick={onSignUp}>
          Sign Up
        </button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
