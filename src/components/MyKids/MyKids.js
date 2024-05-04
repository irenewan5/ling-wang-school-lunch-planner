import { useEffect, useState } from "react";
import api from "../../libs/api";
import Kid from "./Kid";

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
    <>
      <h2>My Kids</h2>
      <div>
        {kids.map((kid) => (
          <Kid key={kid.id} kid={kid} reloadKids={reloadKids} />
        ))}
        <Kid reloadKids={reloadKids} />
      </div>
    </>
  );
}

export default MyKids;
