import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEstate } from "../../redux/apiCalls";
import "./newEstate.css";

export default function NewEstate() {
  const dispatch = useDispatch();

  // Create state variables to manage form input values
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [location, setLocation] = useState("");
  const [features, setFeatures] = useState("");
  const [house, setHouse] = useState("");
  const [img, setImg] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a timeline object with form values
    const newEstate = {
      title,
      desc,
      categories,
      location,
      features,
      house,
      img,
    };

    // Dispatch the addEstate action with the newEstate data
    addEstate(newEstate, dispatch);

    // Clear form input values
    setTitle("");
    setDesc("");
    setCategories("");
    setLocation("");
    setFeatures("");
    setHouse("");
    setImg("");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Estate</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Desc</label>
          <input
            type="text"
            placeholder="Desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>categories</label>
          <input
            type="text"
            placeholder="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Features</label>
          <input
            type="text"
            placeholder="Features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>No of Houses</label>
          <input
            type="number"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Img</label>
          <input
            type="file"
            multiple
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button className="newUserButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
