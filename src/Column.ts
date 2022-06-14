import Card from "./Card";

export default class Column {
  cards: Card[];

  constructor(readonly name: string, readonly hasEstimative: boolean) {
    this.cards = [];
  }

  addCard(card: Card, date: Date) {
    card.addTransition(this.name, date);
    this.cards.push(card);
  }

  removeCard(card: Card) {
    const filteredCards = this.cards.filter(item => item != card)
    this.cards = filteredCards;
  }

  getCards() {
    return this.cards;
  }

  getCardByTitle(title: string) {
    const card = this.cards.find(card => card.title === title);
    if (!card) throw new Error("Card does not exist");
    return card;
  }

  getEstimative() {
    return this.cards.reduce((total: number, card: Card) => {
      total += card.estiative;
      return total
    }, 0)
  }
} 