import React from "react";
<<<<<<< HEAD
import "./topbar.css";
import { NotificationsNone, Language, Power, Settings } from "@material-ui/icons";

export default function Topbar() {
=======
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import "./topbar.css";
import { Settings } from "@material-ui/icons";
import { logout } from "../../redux/userRedux";

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export default function Topbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  const signin = () => {
    navigate("/login")
  }
  const user = useSelector(state => state.user.currentUser)

>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Romax Properties</span>
        </div>
        <div className="topRight">
          {/*<div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
<<<<<<< HEAD
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
           <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
=======
          </div>*/}
          {user ? (
            <Right>
              <MenuItem>{user.username}</MenuItem>
              <MenuItem onClick={handleLogout}><Settings /></MenuItem>
            </Right>) : (
            <Right>
              <MenuItem onClick={signin}>LOG IN</MenuItem>
            </Right>
          )}
          {/*<img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />*/}
>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
        </div>
      </div>
    </div>
  );
}
