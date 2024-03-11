import { PLAYERS, DRAW_MATCH, WINNING_COMBINATIONS } from "../constants/game-constants.js";


/**
 * Function to determine the winner of a single match
 * @param {*} player1Choice 
 * @param {*} player2Choice 
 * @returns winner of the match
 */
export const determineWinner = (player1Choice, player2Choice) => {
    return player1Choice === player2Choice
    ? DRAW_MATCH
    : WINNING_COMBINATIONS[player1Choice] === player2Choice
    ? PLAYERS.PLAYER_ONE
    : PLAYERS.PLAYER_TWO;
}

/**
 * Determine if the player already has a majority win
 * @param {*} scores 
 * @param {*} majorityWinCount 
 * @returns winner of the game
 */
export const getMajorityChampion = (scores, majorityWinCount) => {
    return scores.player1Score > majorityWinCount
        ? PLAYERS.PLAYER_ONE
        : scores.player2Score > majorityWinCount
        ? PLAYERS.PLAYER_TWO
        : DRAW_MATCH;
}

/**
 * Determine the champion of the match
 * @param {*} player1Score 
 * @param {*} player2Score 
 * @returns result of the game
 */
export const determineChampion = (player1Score, player2Score) => player1Score === player2Score ? DRAW_MATCH : (player1Score > player2Score ? PLAYERS.PLAYER_ONE : PLAYERS.PLAYER_TWO);

/**
 * Update the scores of the players
 * @param {*} winner 
 * @param {*} scores 
 * @returns scores count
 */
export const updateScore = (winner, scores) => {
    let { player1Score, player2Score, drawCount } = scores;

    switch(winner) {
        case PLAYERS.PLAYER_ONE:
            player1Score++;
            break;
        case PLAYERS.PLAYER_TWO:
            player2Score++;
            break;
        case DRAW_MATCH:
            drawCount++;
            break;
    }
    return {
        player1Score,
        player2Score,
        drawCount
    };
}
