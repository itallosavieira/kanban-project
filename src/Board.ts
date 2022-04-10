import Column from "./Column"
import Card from "./Card"

export default class Board {
  columns: Column[];

  constructor(readonly name: string) {
    this.columns = [];
  }

  addColumn(name: string, hasEstimative: boolean) {
    this.columns.push(new Column(name, hasEstimative))
  }

  getColumn(name: string) {
    const column = this.columns.find(col => col.name === name);
    if (!column) throw new Error("Column does not exist");
    return column;
  }

  addCard(columnName: string, title: string, estimative: number) {
    const column = this.getColumn(columnName);
    column.addCard(new Card(title, estimative));
  }

  changeCardTo(cardTitle: string, columnNameFrom: string, columnNameTo: string) {
    const columnFrom = this.getColumn(columnNameFrom);
    const columnTo = this.getColumn(columnNameTo);
    const card = columnFrom.getCard(cardTitle);

    columnTo.addCard(card);
    columnFrom.removeCard(card);
  }
}