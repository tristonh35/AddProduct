class VideoGame {
  title: string;
  price: number;
  rating: string;
  onlineOnly: boolean;
}
// test code
// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.rating = "E";
// myGame.price = 30;
// myGame.onlineOnly = false;

window.onload = function () {
  // assigning addBtn to the add video game button
  let addBtn = <HTMLElement>document.querySelector("input[type=button]");
  // when clicked, addBtn will trigger addVideoGame()
  addBtn.onclick = addVideoGame;
};

function addVideoGame() {
  alert("test");
  // check if data is valid, if so then pull the game value with getVideoGame() then display with displayGame()
  if (isAllDataValid()) {
    let game = getVideoGame();
    displayGame(game);
  }
}

function displayGame(myGame: VideoGame): void {
  let displayDiv = getById("display");

  // create <h2> with game title
  let gameHeading = document.createElement("h2");
  gameHeading.innerText = myGame.title;

  // create paragraph with game details

  let gameInfo = document.createElement("p");
  let notOnlineDisplay = "";
  if (!myGame.onlineOnly) {
    notOnlineDisplay = "not";
  }
  gameInfo.innerText =
    myGame.title +
    " has a rating of " +
    myGame.rating +
    ". It costs $" +
    myGame.price +
    ". It is " +
    notOnlineDisplay +
    " digital only";
  // add <h2> in the div id = display
  displayDiv.appendChild(gameHeading);
  // add <p. game info
  displayDiv.appendChild(gameInfo);
}
function getById(id: string) {
  return document.getElementById(id);
}

/**
 * gets all data from the form and returns it in a VideoGame object
 *
 */
function getVideoGame(): VideoGame {
  let game = new VideoGame();
  //Populate with data from the form
  let titleInput = <HTMLInputElement>getById("title");

  game.title = titleInput.value;

  let priceInput = <HTMLInputElement>getById("price");

  game.price = parseFloat(priceInput.value);

  game.rating = (<HTMLSelectElement>getById("rating")).value;

  let onlineOnly = <HTMLInputElement>getById("online");

  if (onlineOnly.checked) {
    game.onlineOnly = true;
  } else {
    game.onlineOnly = false;
  }

  return game;
}

// ADD VALIDATION CODE*****************
function isAllDataValid() {
  return true;
}
