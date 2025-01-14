import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1>Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1>Featured Charts</h1>
        <div className="flex overflow-auto">
          {
            songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))
          }
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
