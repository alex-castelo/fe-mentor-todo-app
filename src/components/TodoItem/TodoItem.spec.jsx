import { describe, test, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@test-utils";

import TodoItem from "./TodoItem";

describe("TodoInput", () => {
  test("renders todo item when it is not completed placeholder text", () => {
    render(
      <TodoItem
        todo={{ id: "123", description: "test description", completed: false }}
      />,
    );

    const itemDescription = screen.getByRole("button", {
      name: /test description/i,
    });
    const crossIcon = screen.getByTestId("cross-icon");

    expect(itemDescription).toBeVisible();
    expect(crossIcon).toBeVisible();
  });

  test("renders completed item icon when item its completed", () => {
    render(
      <TodoItem
        todo={{ id: "123", description: "test description", completed: true }}
      />,
    );

    const completedIcon = screen.getByTestId("completed-icon");

    expect(completedIcon).toBeVisible();
  });

  test("renders completed item icon when item it is not completed", () => {
    render(
      <TodoItem
        todo={{ id: "123", description: "test description", completed: false }}
      />,
    );

    const nonCompletedIcon = screen.getByTestId("non-completed-icon");

    expect(nonCompletedIcon).toBeVisible();
  });

  test("call deleteTodo function when user clicks on cross icon", async () => {
    const deleteTodoMock = vi.fn();

    render(
      <TodoItem
        todo={{ id: "123", description: "test description", completed: false }}
        deleteTodo={deleteTodoMock}
      />,
    );
    const crossIcon = screen.getByTestId("cross-icon");

    await fireEvent.click(crossIcon);

    expect(deleteTodoMock).toHaveBeenCalledWith("123");
  });

  test("call checkTodo function when user clicks on check icon", async () => {
    const checkTodoMock = vi.fn();

    render(
      <TodoItem
        todo={{ id: "123", description: "test description", completed: false }}
        checkTodo={checkTodoMock}
      />,
    );
    const nonCompletedIcon = screen.getByTestId("non-completed-icon");

    await fireEvent.click(nonCompletedIcon);

    expect(checkTodoMock).toHaveBeenCalledWith("123");
  });

  test("call checkTodo function when user clicks on item description", async () => {
    const checkTodoMock = vi.fn();

    render(
      <TodoItem
        todo={{
          id: "123",
          description: "test description",
          completed: false,
        }}
        checkTodo={checkTodoMock}
      />,
    );

    const itemDescription = screen.getByRole("button", {
      name: /test description/i,
    });

    await fireEvent.click(itemDescription);

    expect(checkTodoMock).toHaveBeenCalledWith("123");
  });
});
