export function sendToLogger(object) {
  if (typeof object != "object") {
    throw new Error("O valor enviado para o logger precisa ser um objeto");
  }
  if (!object.timestamp) {
    throw new Error("O objeto de logging não possui o timestamp");
  }
  console.log("%cLog server received:", "color: yellow");
  console.table(object);
  console.log("%cSaved successfully!", "color: green");
}

export function getTimestamp() {
  return new Date().toISOString();
}

export function fetchGames() {
  return fetch("https://mmo-games.p.rapidapi.com/games", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      "x-rapidapi-key": "6d65fcfef4msh17a794d7b7e75c4p1c4ce5jsnee5a688878e9",
    },
  })
    .then((res) => res.json())
    .then((data) => data.map((game) => ({ title: game.title, platform: game.platform })));
}

export function filterGamesByTitle(list, term) {
  return list.filter((item) => new RegExp(term, "ig").test(item.title));
}
