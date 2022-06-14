import Board from "../src/Board"

test("Deve criar um quadro", () => {
  const board = new Board("Board-A");
  expect(board.name).toBe("Board-A");
})

test("Deve incluir as colunas no quadro", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  expect(board.columns).toHaveLength(3);
})

test("Deve inserir cartões nas colunas do quadro", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 4);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Todo", "Task 3", 3);
  expect(board.getColumnByName("Todo").getCards()).toHaveLength(3)
})

test("Deve calcular a estimativa de uma coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 4);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Todo", "Task 3", 3);
  expect(board.getColumnByName("Todo").getEstimative()).toBe(9)
})

test("Deve trocar um cartão de coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 4);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Todo", "Task 3", 3);
  board.moveCardToColumn("Task 1", "Todo", "Doing");
  expect(board.getColumnByName("Todo").getEstimative()).toBe(5)
  expect(board.getColumnByName("Doing").getEstimative()).toBe(4)
})

test("Deve armazenar o tempo em cada coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 4, new Date("2021-03-01T10:00:00"));
  board.moveCardToColumn("Task 1", "Todo", "Doing", new Date("2021-03-10T10:00:00"));
  const card = board.getColumnByName("Doing").getCardByTitle("Task 1");

  expect(card.transitions[0].date).toEqual(new Date("2021-03-01T10:00:00"));
  expect(card.transitions[1].date).toEqual(new Date("2021-03-10T10:00:00"));
})

