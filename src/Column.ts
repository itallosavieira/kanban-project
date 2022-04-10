import Card from "./Card"

export default class Column {
  cards: Card[]

  constructor(readonly name: string, readonly hasEstimative: boolean) {
    this.cards = [];
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  removeCard(card: Card) {
    const indexOfCard = this.cards.indexOf(card);
    this.cards.splice(indexOfCard, 1);
  }

  getCards() {
    return this.cards;
  }

  getCard(name: string) {
    const card = this.cards.find(car => car.title === name);
    if (!card) throw new Error("Card does not exist");
    return card;
  }

  getColumnEstimative() {
    const estimative = this.cards.reduce((total: number, card: Card) => total += card.estimative, 0);
    return estimative;
  }
}