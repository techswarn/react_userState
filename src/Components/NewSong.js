import React, { useState } from "react";

const NewSong = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter song name: </label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSong;
