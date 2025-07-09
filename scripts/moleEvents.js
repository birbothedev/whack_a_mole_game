import { getAllTiles, shuffleTiles, createNewMoleImage, removeMoleImage, getRandomNumber } from "./util.js";
import { tileMap, getKey } from "./mainScript.js";


export function spawnMole(){
    const tiles = getAllTiles();
    shuffleTiles(tiles);

    let i = Math.floor(Math.random() * (tiles.length));
    const tile = tiles[i];

    addMoleToNewTile(tile);

    setTimeout(function() {
        removeMoleFromTile(tile);
    }, 2000); 
}


function addMoleToNewTile(tile){
    const key = getKey(tile);
    const tileData = tileMap.get(key);

    if (tileData) {
        tileData.hasMole = true;
        tileData.empty = false;
    }

    createNewMoleImage(tile);
}

function removeMoleFromTile(tile){
    const key = getKey(tile);
    const tileData = tileMap.get(key);

    if (tileData) {
        tileData.hasMole = false;
        tileData.empty = true;
    }

    removeMoleImage(tile);
}