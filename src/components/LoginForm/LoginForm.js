import api from "../../libs/api";

function LoginForm({ onLogin }) {
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
    <form className="loginform" onSubmit={onSubmit}>
      <div className="loginform__field">
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div className="loginform__field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div className="loginform__actions">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
