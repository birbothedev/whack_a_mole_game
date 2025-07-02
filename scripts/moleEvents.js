import { getAllTiles, shuffleTiles, createNewMoleImage, removeMoleImage } from "./util.js";
import { tileMap, getKey } from "./mainScript.js";


export function spawnMole(){
    const tiles = getAllTiles();
    shuffleTiles(tiles);

    let i = Math.floor(Math.random() * (tiles.length));
    const tile = tiles[i];

    addMoleToNewTile(tile);

    setTimeout(function() {
        removeMoleFromTile(tile);
    }, 1000); 
}

function addMoleToNewTile(tile){
    const key = getKey(tile);
    const tileData = tileMap.get(key);

    if (tileData) {
        tileData.hasMole = true;
        tileData.isEmpty = false;
    }

    createNewMoleImage(tile);
}

function removeMoleFromTile(tile){
    const key = getKey(tile);
    const tileData = tileMap.get(key);

    if (tileData) {
        tileData.hasMole = false;
        tileData.isEmpty = true;
    }

    removeMoleImage(tile);
}