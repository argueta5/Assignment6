class Deck {
    constructor() {
        this.cards = []; // Initialize an empty array to store cards
        this.createDeck(); // Call createDeck method to populate the deck
    }

    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // Array of card suits
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Array of card ranks
        
        // Nested loops to create cards for each suit and rank combination
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(rank, suit)); // Create a new Card object and add it to the deck
            }
        }
    }

    shuffle() {
        // Fisher-Yates shuffle algorithm to randomize the order of cards in the deck
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index within the remaining unshuffled portion
            // Swap the current card with the randomly chosen card
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealCard() {
        return this.cards.pop(); // Remove and return the top card from the deck (last element of the array)
    }
}