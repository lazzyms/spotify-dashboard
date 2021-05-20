import axios from "axios";
import config from "../config";
import authorize from "./Authentication";

export function getCategories() {
  return new Promise((resolve, reject) => {
    authorize().then(async (token) => {
      const res = await axios.get(
        `${config.api.baseUrl}/browse/categories?locale=en_US`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(res.data.categories.items);
    });
  });
}

export function getFeaturedPlaylists() {
  return new Promise((resolve, reject) => {
    authorize().then(async (token) => {
      const res = await axios.get(
        `${config.api.baseUrl}/browse/featured-playlists?locale=en_US`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(res.data.playlists.items);
    });
  });
}

export function getNewReleases() {
  return new Promise((resolve, reject) => {
    authorize().then(async (token) => {
      const res = await axios.get(
        `${config.api.baseUrl}/browse/new-releases?locale=en_US`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      resolve(res.data.albums.items);
    });
  });
}
