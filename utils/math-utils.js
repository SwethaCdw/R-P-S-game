/**
 * Get the random choice for the players
 * @param CHOICES 
 * @returns ROCK (or) PAPER (or) SCISSOR
 */
export const getRandomChoice = (CHOICES) => CHOICES[Math.floor(Math.random() * CHOICES.length)];