import chevronLeftIcon from "../../assets/icons/chevron-left.svg";
import chevronRightIcon from "../../assets/icons/chevron-right.svg";
import "./KidPicker.scss";

function KidPicker({ kids, kidId, onChange }) {
  const selectedKidId = kidId;
  const selectedKid = kids.find((kid) => kid.id === selectedKidId);

  function selectLastKid() {
    const index = kids.findIndex((kid) => kid.id === selectedKidId);
    if (index !== -1) {
      const lastIndex = index > 0 ? index - 1 : kids.length - 1;
      onChange(kids[lastIndex].id);
      console.log("last", kids[lastIndex].id);
    }
  }

  function selectNextKid() {
    const index = kids.findIndex((kid) => kid.id === selectedKidId);
    if (index !== -1) {
      const lastIndex = index !== kids.length - 1 ? index + 1 : 0;
      onChange(kids[lastIndex].id);
    }
  }

  return (
    <div className="kidpicker">
      <button className="kidpicker__button" onClick={selectLastKid}>
        <img src={chevronLeftIcon} alt="another kid" />
      </button>
      <div className="kidpicker__name">
        {selectedKid ? selectedKid.name : "..."}
      </div>
      <button className="kidpicker__button" onClick={selectNextKid}>
        <img src={chevronRightIcon} alt="another kid" />
      </button>
    </div>
  );
}
export default KidPicker;
