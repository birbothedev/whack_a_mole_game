import { spawnMole } from "./moleEvents.js";
import { startTimer } from "./util.js";

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
    spawnMole();
    startTimer();
}