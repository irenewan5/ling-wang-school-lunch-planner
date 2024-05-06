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
    <form className="form" onSubmit={onSubmit}>
      <div className="form__field">
        <label htmlFor="name" className="form__field-label">
          Name
        </label>
        <input
          id="name"
          className="form__field-input"
          placeholder="Enter you name"
        />
      </div>
      <div className="form__field">
        <label htmlFor="email" className="form__field-label">
          Email
        </label>
        <input
          id="email"
          className="form__field-input"
          placeholder="Enter your email"
        />
      </div>
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
        <button type="submit">Sign Up</button>
        <a href="#" onClick={onLogin}>
          Login
        </a>
      </div>
    </form>
  );
}

export default SignUpForm;
