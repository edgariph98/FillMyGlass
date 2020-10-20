import fetch from "unfetch";

export const getAllGames = () => fetch("games/get");

export const getGame = (gameID) => fetch("games/get/" + gameID);

export const addGame = (game) =>
  fetch("games/submit", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(game),
  });
