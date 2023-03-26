import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get("http://localhost:8000/home/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
          setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);
  if (message === "")
    return (
      <div className="form-signin mt-5 text-center">
        <h3>Not logged in</h3>
      </div>
    );
  return (
    <div className="form-signin mt-5 text-center">
      <h3>Message from server: {message}</h3>
    </div>
  );
};
