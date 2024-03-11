import { getGameResult } from "./components/play-game.js";
import { DRAW_MATCH } from "./constants/game-constants.js"

const gameResult = getGameResult();
console.log(gameResult == DRAW_MATCH ? `It's a ${DRAW_MATCH}` : `${gameResult} wins majority matches and is the champion!`);

