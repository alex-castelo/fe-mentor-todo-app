import { createRoot } from "react-dom/client";
import { useState } from "react";

import ThemeContext from "./context/ThemeContext";
import TheHeader from "./components/TheHeader/TheHeader";
import Home from "./views/Home";
import PageLayout from "./layouts/PageLayout";

const App = () => {
  const theme = useState("dark");

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
