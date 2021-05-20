import React, { useEffect, useState } from "react";
import {
  getNewReleases,
  getFeaturedPlaylists,
  getCategories,
} from "../../../services";
import DiscoverBlock from "./DiscoverBlock";
import "../styles/_discover.scss";

export default function Discover() {
  const [newReleases, setNewRelease] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getNewReleases().then((result) => setNewRelease(result));
    getFeaturedPlaylists().then((result) => setPlaylists(result));
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
}
