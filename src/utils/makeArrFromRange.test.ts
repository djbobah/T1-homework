import { expect, test } from "@jest/globals";
import { makeArrFromRange } from "./functions";

describe("makeArrFromRange", () => {
  test("создает массив чисел в заданном диапазоне", () => {
    expect(makeArrFromRange(1, 5)).toEqual([1, 2, 3, 4]);
  });

  test("возвращает пустой массив, если начальный индекс равен конечному", () => {
    expect(makeArrFromRange(3, 3)).toEqual([]);
  });

  test("возвращает пустой массив, если начальный индекс больше конечного", () => {
    expect(makeArrFromRange(5, 2)).toEqual([]);
  });
});
