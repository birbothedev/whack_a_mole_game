import { getKey, tileMap } from "./mainScript.js";
import { getAllTiles } from "./util.js";

let wrongClickCount = 0;
let moleClickCount = 0;

export function listenForPlayerClicks(){
    const allTiles = getAllTiles();

    allTiles.forEach(tile => {
        tile.addEventListener('click', function(){
            const key = getKey(tile);
            const tileData = tileMap.get(key);
            if (tileData.empty) {
                wrongClickCount++;
                console.log("Wrong clicks: ", wrongClickCount);
            } else if (tileData.hasMole){
                moleClickCount++;
                console.log("Right Clicks: ", moleClickCount);
            }
        });
    })
}