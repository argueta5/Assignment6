class Player {
    constructor(name) {
        this.name = name; // Initialize the player's name
        this.hand = []; // Initialize an empty array to store the player's hand of cards
        this.score = 0; // Initialize the player's score (assuming a game scoring mechanism)
    }

    playCard() {
        return this.hand.pop(); // Remove and return the last card from the player's hand
    }

    addToHand(card) {
        this.hand.unshift(card); // Add a card to the beginning of the player's hand (for playing)
    }
}