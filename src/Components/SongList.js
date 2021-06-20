import React, { useState } from "react";
import NewSong from "./NewSong";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "This is awesome", id: uuidv4() },
    { title: "Country roads take me home", id: uuidv4() },
    { title: "World has one storie", id: uuidv4() },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSong addSong={addSong} />
    </div>
  );
};

export default SongList;
