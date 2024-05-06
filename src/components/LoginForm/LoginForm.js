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
        <label htmlFor="username" className="form__field-label">
          Username
        </label>
        <input
          id="username"
          className="form__field-input"
          placeholder="Enter your username"
        />
      </div>
      <div className="form__field">
        <label htmlFor="password" className="form__field-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form__field-input"
          placeholder="Enter your password"
        />
      </div>
      <div className="form__actions">
        <button type="submit">Login</button>
        <a href="#" onClick={onSignUp}>
          Sign Up
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
