import Column from "./Column";
import Card from "./Card";

export default class Board {
  columns: Column[];

  constructor(readonly name: string) {
    this.columns = [];
  }

  addColumn(name: string, hasEstimative: boolean) {
    this.columns.push(new Column(name, hasEstimative));
  }

  getColumnByName(name: string) {
    const column = this.columns.find(column => column.name === name);
    if (!column) throw new Error("Column does not exist");
    return column;
  }

  addCard(columnName: string, cardTitle: string, estimative: number, date: Date = new Date()) {
    const column = this.getColumnByName(columnName);
    column.addCard(new Card(cardTitle, estimative), date);
  }

  moveCardToColumn(cardTitle: string, columnNameFrom: string, columnNameTo: string, date: Date = new Date()) {
    const columnFrom = this.getColumnByName(columnNameFrom);
    const columnTo = this.getColumnByName(columnNameTo);
    const card = columnFrom.getCardByTitle(cardTitle);

    columnTo.addCard(card, date);
    columnFrom.removeCard(card);
  }
}