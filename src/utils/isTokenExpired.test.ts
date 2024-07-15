import { expect, test } from "@jest/globals";
import { isTokenExpired } from "./functions";

describe("isTokenExpired", () => {
  test("должен вернуть true, если токен не предоставлен", () => {
    expect(isTokenExpired("")).toBeTruthy();
  });

  test("должен вернуть true, если токен истек", () => {
    // Создаем токен с истекшим сроком действия
    const expiredToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) - 30 })) +
      ".signature";
    expect(isTokenExpired(expiredToken)).toBeTruthy();
  });

  test("должен вернуть false, если токен еще действителен", () => {
    // Создаем токен с сроком действия в будущем
    const validToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 30 })) +
      ".signature";
    expect(isTokenExpired(validToken)).toBeFalsy();
  });
});
