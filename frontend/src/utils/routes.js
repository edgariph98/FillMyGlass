import fetch from "unfetch";

export const getAllGames = () => fetch("games/get/all");

export const filteredGames = (filters) =>
  fetch("games/get", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(filters),
  });

export const addGame = (game) =>
  fetch("games/submit", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(game),
  });

export const getMediaTypes = () => fetch("games/get/mediatypes");