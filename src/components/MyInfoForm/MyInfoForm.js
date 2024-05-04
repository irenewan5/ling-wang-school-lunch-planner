import { useEffect, useState } from "react";
import api from "../../libs/api";

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
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input
            id="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div>
          <button>Update</button>
        </div>
      </form>
    </>
  );
}

export default MyInfoForm;
