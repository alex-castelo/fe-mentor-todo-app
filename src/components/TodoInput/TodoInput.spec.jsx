import { describe, test, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@test-utils";

import TodoInput from "./TodoInput";

describe("TodoInput", () => {
  test("renders input placeholder text", () => {
    render(<TodoInput />);

    const input = screen.getByPlaceholderText(/create a new todo/i);

    expect(input).toBeVisible();
  });

  test("calls setTodo when user types", async () => {
    const setTodoMock = vi.fn();

    render(<TodoInput setTodo={setTodoMock} />);

    const input = screen.getByPlaceholderText(/create a new todo/i);

    await fireEvent.change(input, { target: { value: "New todo item" } });

    expect(setTodoMock).toHaveBeenCalledWith("New todo item");
  });
});
