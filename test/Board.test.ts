import Board from "../src/Board"
/*
Deve criar um quadro - OK
Deve incluir as colunas no quadro - OK
Deve inserir cartões nas colunas do quadro - OK
Deve calcular a estimativa de uma coluna - OK
Deve trocar cartão de coluna - OK
---
Deve armazenar o tempo do card em cada coluna
*/

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
  board.addCard("Todo", "Task 1", 3);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Doing", "Task 3", 2);
  expect(board.getColumn("Todo").getCards()).toHaveLength(2);
  expect(board.getColumn("Doing").getCards()).toHaveLength(1);
})

test("Deve calcular a estimativa de uma coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 3);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Doing", "Task 3", 2);
  board.addCard("Doing", "Task 4", 5);
  expect(board.getColumn("Todo").getColumnEstimative()).toBe(5);
  expect(board.getColumn("Doing").getColumnEstimative()).toBe(7);
  expect(board.getColumn("Done").getColumnEstimative()).toBe(0);
})

test("Deve trocar cartão de coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 3);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Doing", "Task 3", 2);
  board.addCard("Doing", "Task 4", 5);
  board.changeCardTo("Task 1", "Todo", "Doing");
  board.changeCardTo("Task 2", "Todo", "Done");
  expect(board.getColumn("Todo").getCards()).toHaveLength(0);
  expect(board.getColumn("Doing").getCards()).toHaveLength(3);
  expect(board.getColumn("Done").getCards()).toHaveLength(1);
})

test("Deve trocar cartão de coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 3);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Doing", "Task 3", 2);
  board.addCard("Doing", "Task 4", 5);
  board.changeCardTo("Task 1", "Todo", "Doing");
  board.changeCardTo("Task 2", "Todo", "Done");
  expect(board.getColumn("Todo").getCards()).toHaveLength(0);
  expect(board.getColumn("Doing").getCards()).toHaveLength(3);
  expect(board.getColumn("Done").getCards()).toHaveLength(1);
})

test("Deve trocar cartão de coluna", () => {
  const board = new Board("Board-A");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Task 1", 3);
  board.addCard("Todo", "Task 2", 2);
  board.addCard("Doing", "Task 3", 2);
  board.addCard("Doing", "Task 4", 5);
  board.changeCardTo("Task 1", "Todo", "Doing");
  board.changeCardTo("Task 2", "Todo", "Done");
  expect(board.getColumn("Todo").getCards()).toHaveLength(0);
  expect(board.getColumn("Doing").getCards()).toHaveLength(3);
  expect(board.getColumn("Done").getCards()).toHaveLength(1);
})
