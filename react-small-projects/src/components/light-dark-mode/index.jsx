import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";
export const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <div
      className="light-dark-mode h-screen w-screen flex justify-center items-center"
      data-theme={theme}
    >
      <div className="container flex">
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};
