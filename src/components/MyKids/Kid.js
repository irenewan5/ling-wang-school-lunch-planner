import { useState } from "react";
import api from "../../libs/api";
import deleteIcon from "../../assets/icons/trash3.svg";
import addIcon from "../../assets/icons/person-plus.svg";
import updateIcon from "../../assets/icons/check-lg.svg";

function Kid({ kid, reloadKids }) {
  const [name, setName] = useState(kid?.name ?? "");
  const onUpdate = async () => {
    if (kid) {
      await api.updateKid(kid.id, name);
      alert("Updated");
    }
  };
  const onAdd = async () => {
    await api.addKid(name);
    alert("Added");
    setName("");
    await reloadKids();
  };
  const onRemove = async () => {
    if (kid && window.confirm(`Are you sure to remove ${kid.name}?`)) {
      await api.removeKid(kid.id);
      alert("Removed");
      await reloadKids();
    }
  };
  return (
    <div>
      <input value={name} onChange={(evt) => setName(evt.target.value)} />
      {kid ? (
        <div>
          <button onClick={onUpdate}>
            <img src={updateIcon} alt="Update Icon" />
          </button>
          <button onClick={onRemove}>
            <img src={deleteIcon} alt="Remove Icon" />
          </button>
        </div>
      ) : (
        <button onClick={onAdd}>
          <img src={addIcon} alt="Add Icon" />
        </button>
      )}
    </div>
  );
}

export default Kid;
