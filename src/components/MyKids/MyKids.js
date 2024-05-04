import { useEffect, useState } from "react";
import api from "../../libs/api";

function MyKids() {
  const [kids, setKids] = useState([]);

  useEffect(() => {
    api.getKids().then((kids) => setKids(kids));
  }, []);

  return (
    <>
      <h2>My Kids</h2>
      <div>
        {kids.map((kid) => (
          <div key={kid.id}>
            <div>{kid.name}</div>
            <div>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyKids;
