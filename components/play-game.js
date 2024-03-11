import { determineWinner, getMajorityChampion, determineChampion, updateScore} from "../utils/game-utils.js";
import { getRandomChoice } from "../utils/math-utils.js";
import { TOTAL_MATCHES, PLAYERS, MAJORITY_WIN_COUNT, CHOICES } from "../constants/game-constants.js";

/**
 * Play rock paper scissor game
 * @returns The result of the game
 */
export const getGameResult = () => {
    let scores = { player1Score : 0, player2Score : 0, drawCount : 0 }

    for (let i = 1; i <= TOTAL_MATCHES; i++) {
        //Get player 1 and 2 choices
        const player1Choice = getRandomChoice(CHOICES); 
        const player2Choice = getRandomChoice(CHOICES); 
        console.log(`Match ${i}`);
        console.log(`${PLAYERS.PLAYER_ONE} chose: ${player1Choice}`);
        console.log(`${PLAYERS.PLAYER_TWO} chose: ${player2Choice}`);

        //Determine Match winner
        const matchWinner = determineWinner(player1Choice, player2Choice);
        console.log(`Match ${i} Winner: ${matchWinner}`);

        //Calculate the player scores
        scores = updateScore(matchWinner, scores);

        //Check if the player has the Majority wins already
        if ( scores.player1Score > MAJORITY_WIN_COUNT || scores.player2Score > MAJORITY_WIN_COUNT || scores.drawCount > MAJORITY_WIN_COUNT ) {
            return getMajorityChampion(scores, MAJORITY_WIN_COUNT);
        } 
       
    }

    return determineChampion(scores.player1Score, scores.player2Score);
};

