import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  test("render Search component с input и button", () => {
    // моковые параметры
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn();
    const styleName = "additional-styles";

    // отрисовка компонента с моковыми параметрами
    render(
      <Search
        styleName={styleName}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search by title");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    // проверка что input и button есть в документе
    expect(inputElement).toBe;
    expect(buttonElement).toBe;

    // проверка что пользователь печатает в input
    fireEvent.change(inputElement, { target: { value: "test query" } });
    // проверка что сработало событие onChange
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    // проверка что пользователь нажимает на кнопку
    fireEvent.click(buttonElement);
    // проверка что произошло событие onClick
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
