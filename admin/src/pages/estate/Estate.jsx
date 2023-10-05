//import { useState, useEffect } from "react";
import {
  CalendarToday,
  //MailOutline,
  PermIdentity,
  //PhoneAndroid,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import "./estate.css";

export default function Estate() {
  const location = useLocation();
  const estateId = location.pathname.split("/")[2];

  const estate = useSelector((state) =>
    state.estate.estates.find((estate) => estate._id === estateId)
  );

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Estate</h1>
        <Link to="/newEstate">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">ID: {estate._id}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{estate.title}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{estate.desc}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Category: {estate.categories}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Houses: {estate.house}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Features: {estate.features}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  placeholder={estate.title}
                  className="userUpdateInput"
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div> */}
              <div className="userUpdateItem">
                <label>Desc</label>
                <input
                  type="text"
                  placeholder={estate.desc}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  type="text"
                  placeholder={estate.location}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>House</label>
                <input
                  type="text"
                  placeholder={estate.house}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Categories</label>
                <input
                  type="text"
                  placeholder={estate.categories}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Features</label>
                <input
                  type="text"
                  placeholder={estate.features}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>img</label>
                <input
                  type="file"
                  multiple
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
