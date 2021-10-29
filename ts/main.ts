class VideoGame {
  title: string;
  price: number;
  rating: string;
  onlineOnly: boolean;
};

window.onload = function () {
  // assigning addBtn to the add video game button
  let addBtn = <HTMLElement>document.querySelector("input[type=button]");
  // when clicked, addBtn will trigger addVideoGame()
  addBtn.onclick = addVideoGame;
};

/**
 * clears all errors in validation-summary
 */  
function clearAllErrors() {
    let errorSummary = getById("validation-summary");
    errorSummary.innerText = "";

}

function addVideoGame() {
  if (allDataValid()) {
    clearAllErrors();
    let game:VideoGame = getVideoGame();
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
function getInputById(id:string):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}


function allDataValid() {
    let isValid = true;
    
    let title = getInputById("title").value;
  
    if (title == ""){
        isValid = false;
        addErrorMessage("Title is required!!");
  
    }
    let price = getInputById("price").value;
    let priceValue = parseFloat(price)
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number!!")
        
    }
    let rating = (<HTMLOptionElement>getById("rating")).value;
    if(rating == "") {
        isValid = false;
        addErrorMessage("You must select a rating!!!")
    }

    return isValid;
  }

function addErrorMessage(errorMessage) {
    let errorSummary = getById("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
