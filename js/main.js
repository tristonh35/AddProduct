var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    alert("test");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notOnlineDisplay = "";
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
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getById(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    game.rating = getById("rating").value;
    var onlineOnly = getById("online");
    if (onlineOnly.checked) {
        game.onlineOnly = true;
    }
    else {
        game.onlineOnly = false;
    }
    return game;
}
function isAllDataValid() {
    return true;
}
