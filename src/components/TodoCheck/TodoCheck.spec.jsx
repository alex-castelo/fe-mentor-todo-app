import { describe, test, expect } from "vitest";
import { render, screen } from "@test-utils";

import TodoChek from "./TodoCheck";

describe("TodoCheck component", () => {
  test("renders completed icon when completed prop is set to 'true'", () => {
    render(<TodoChek completed={true} />);

    const completedIcon = screen.getByTestId("completed-icon");
    const nonCompletedIcon = screen.queryByTestId("non-completed-icon");

    expect(completedIcon).toBeVisible();
    expect(nonCompletedIcon).not.toBeInTheDocument();
  });

  test("renders non completed icon when completed prop is set to 'false", () => {
    render(<TodoChek completed={false} />);

    const completedIcon = screen.queryByTestId("completed-icon");
    const nonCompletedIcon = screen.getByTestId("non-completed-icon");

    expect(nonCompletedIcon).toBeVisible();
    expect(completedIcon).not.toBeInTheDocument();
  });
});
