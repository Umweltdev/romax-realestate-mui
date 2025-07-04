import { useState, useEffect } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom"

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      } catch { }
    }
    getUsers();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={users.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton" onClick={() => navigate("/users")}>
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
