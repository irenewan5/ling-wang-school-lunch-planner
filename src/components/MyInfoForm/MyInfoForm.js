import { useEffect, useState } from "react";
import api from "../../libs/api";
import updateIcon from "../../assets/icons/floppy.svg";

function MyInfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = async (evt) => {
    evt.preventDefault();
    await api.updateMyInfo({
      name,
      email,
    });
    alert("Updated");
  };

  useEffect(() => {
    api.getMyInfo().then((user) => {
      setName(user.name);
      setEmail(user.email);
    });
  }, []);
  return (
    <>
      <h2>My Info</h2>
      <form onSubmit={onSubmit} className="form">
        <div className="form__field">
          <label htmlFor="name" className="form__field-label">
            Name
          </label>
          <input
            className="form__field-input"
            id="name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div className="form__field">
          <label htmlFor="name" className="form__field-label">
            Email
          </label>
          <input
            className="form__field-input"
            id="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className="form__actions">
          <button>
            <img src={updateIcon} alt="Update Icon" />
            Update my info
          </button>
        </div>
      </form>
    </>
  );
}

export default MyInfoForm;
