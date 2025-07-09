import { spawnMole } from "./moleEvents.js";
import { listenForPlayerClicks } from "./playerEvents.js";
import { startTimer, getRandomNumber } from "./util.js";

const startButton = document.getElementById("startButton");
startButton.addEventListener('click', function() {
    initialize();
});

export const tileMap = new Map();

function initializeTileMap(){
    const tiles = Array.from(document.querySelectorAll('.tiles'));
    tiles.forEach(tile => {
        const key = getKey(tile);
        tileMap.set(key, {
            empty: true,
            hasMole: false
        });
    });
}

export function getKey(tile){
    return tile.dataset.x + "," + tile.dataset.y;
}

function initialize(){
    initializeTileMap();
    const intervalId = setInterval(() => {
        spawnMole();
    }, getRandomNumber());
    setTimeout(() => {
        clearInterval(intervalId);
    }, 31000);
    startTimer();
    listenForPlayerClicks();
}