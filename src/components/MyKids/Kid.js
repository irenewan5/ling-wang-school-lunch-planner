import { useState } from "react";
import api from "../../libs/api";
import deleteIcon from "../../assets/icons/trash3.svg";
import addIcon from "../../assets/icons/person-plus.svg";
import addWhiteIcon from "../../assets/icons/person-plus-white.svg";
import updateIcon from "../../assets/icons/check-lg.svg";
import personIcon from "../../assets/icons/person-circle.svg";

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
    if (kid && window.confirm(`Are you sure you want to remove ${kid.name}?`)) {
      await api.removeKid(kid.id);
      alert("Removed");
      await reloadKids();
    }
  };
  return (
    <div className="kids__kid">
      <div className="kids__kid-image">
        <img src={kid ? personIcon : addIcon} alt="Avatar" />
      </div>
      <div className="kids__kid-info">
        <input
          type="text"
          value={name}
          placeholder="Enter kid's name"
          onChange={(evt) => setName(evt.target.value)}
        />
        {kid ? (
          <>
            <button onClick={onUpdate}>
              <img src={updateIcon} alt="Update Icon" />
            </button>
            <button onClick={onRemove}>
              <img src={deleteIcon} alt="Remove Icon" />
            </button>
          </>
        ) : (
          <button onClick={onAdd}>
            <img src={addWhiteIcon} alt="Add Icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Kid;
