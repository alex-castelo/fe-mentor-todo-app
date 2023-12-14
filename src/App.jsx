import { createRoot } from "react-dom/client";
import { useState } from "react";

import Home from "./views/Home";
import PageLayout from "./layouts/PageLayout";
import ThemeContext from "./context/ThemeContext";
import TheHeader from "./components/TheHeader/TheHeader";

const App = () => {
  const hasDarkSchema = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const defaultSchema = hasDarkSchema ? "dark" : "light";
  const theme = useState(defaultSchema);

  return (
    <ThemeContext.Provider value={theme}>
      <PageLayout>
        <div>
          <TheHeader />
          <div>
            <Home />
          </div>
        </div>
      </PageLayout>
    </ThemeContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
