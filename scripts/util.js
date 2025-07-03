
export function getAllTiles(){
    return Array.from(document.querySelectorAll('.tiles'));
}

export function shuffleTiles(validTilesArray){
    for (let i = validTilesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [validTilesArray[i], validTilesArray[j]] = [validTilesArray[j], validTilesArray[i]];
    }
}

export function createNewMoleImage(tile){
    const moleImage = document.createElement("img"); 
    moleImage.src = `images/blueTile.png`;
    moleImage.alt = `mole image`;
    moleImage.id = 'moleImage';
    moleImage.style.zIndex = 1;
    styleStackedImage(moleImage);
    tile.appendChild(moleImage);
}

export function styleStackedImage(imgElement) {
    imgElement.style.position = "absolute";
    imgElement.style.top = "0";
    imgElement.style.left = "0";
    imgElement.style.width = "100%";
    imgElement.style.height = "100%";
    imgElement.style.objectFit = "contain";
}

export function removeMoleImage(tile){
    const moleImage = document.getElementById("moleImage"); 
    if (moleImage){
        moleImage.remove();
    }
}

let countdownInterval;
let timeRemaining = 31;

export function startTimer() {
    // Start timer if not already running
    if (!countdownInterval) {
        countdownInterval = setInterval(() => {
            timeRemaining--;

            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;

            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

            document.getElementById('timer').textContent = `${formattedMinutes}:${formattedSeconds}`;

            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                endGame(); 
            }
        }, 1000);
    }
}

function endGame(){
    console.log("Game Over!");
}

export function getRandomNumber(){
    return Math.floor(Math.random() * 4);
}