import { useEffect, useState } from "react";
import api from "../../libs/api";
import Kid from "./Kid";
import "./MyKids.scss";

function MyKids() {
  const [kids, setKids] = useState([]);

  const reloadKids = async () => {
    const result = await api.getKids();
    setKids(result);
  };

  useEffect(() => {
    reloadKids();
  }, []);

  return (
    <div>
      <h2>My Kids</h2>
      <div className="kids">
        {kids.map((kid) => (
          <Kid key={kid.id} kid={kid} reloadKids={reloadKids} />
        ))}
        <Kid reloadKids={reloadKids} />
      </div>
    </div>
  );
}

export default MyKids;
