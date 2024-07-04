class Game {
    constructor(player1Name, player2Name) {
        // Initialize a new deck and shuffle it
        this.deck = new Deck(); // Assumes Deck class is defined with methods like shuffle() and dealCard()
        this.deck.shuffle();

        // Create two players with specified names
        this.player1 = new Player(player1Name); // Assumes Player class is defined with methods like playCard()
        this.player2 = new Player(player2Name);

        // Deal cards to both players
        this.dealCards();
    }

    dealCards() {
        // Deal cards alternately until the deck is empty
        while (this.deck.cards.length > 0) {
            this.player1.hand.push(this.deck.dealCard()); // Assumes Player class has a hand array to hold cards
            this.player2.hand.push(this.deck.dealCard());
        }
    }

    playRound() {
        // Check if either player has no cards left to play
        if (this.player1.hand.length === 0 || this.player2.hand.length === 0) {
            throw new Error('No cards left to play.');
        }

        // Each player plays one card
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

        // Determine the outcome of the round based on card ranks
        if (card1.rank > card2.rank) {
            this.player1.score++;
        } else if (card1.rank < card2.rank) {
            this.player2.score++;
        }
        // if tie, do nothing (both scores remain unchanged)
    }

    playGame() {
        // Continue playing rounds until one player runs out of cards
        while (this.player1.hand.length > 0) {
            this.playRound();
        }

        // Display final results after all rounds are played
        this.displayResults();
    }

    displayResults() {
        // Print final scores and determine the winner or if it's a tie
        console.log(`Game over! Final score:`);
        console.log(`${this.player1.name}: ${this.player1.score}`);
        console.log(`${this.player2.name}: ${this.player2.score}`);

        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} wins!`);
        } else if (this.player1.score < this.player2.score) {
            console.log(`${this.player2.name} wins!`);
        } else {
            console.log(`It's a tie!`);
        }
    }
}

// Usage
const game = new Game('Player 1', 'Player 2');
game.playGame();