import { describe, test, expect } from "vitest";
import { render, screen } from "@test-utils";

import TheHeader from "./TheHeader";

describe("TheHeader component", () => {
  test("renders header text properly", () => {
    render(<TheHeader />);

    const header = screen.getByRole("heading", { name: "TODO" });

    expect(header).toBeVisible();
  });

  test("renders theme toggle button", () => {
    render(<TheHeader />);

    const button = screen.getByRole("button");

    expect(button).toBeVisible();
  });
});
