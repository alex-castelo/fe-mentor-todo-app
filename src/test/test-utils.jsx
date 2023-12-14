import { render } from "@testing-library/react";
import ThemeContext from "../context/ThemeContext";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeContext.Provider value={"light"}>{children}</ThemeContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
