"use client";
import React, { createContext, ReactNode } from "react";

const theme = {
  colors: {
    primary: "#1565C0", // deep blue
    secondary: "#78909C", // cool grey
    success: "#388E3C", // strong green
    danger: "#C62828", // deep red
    warning: "#F9A825", // bright yellow
    info: "#0277BD", // bright blue
    light: "#CFD8DC", // light grey
    dark: "#263238", // dark grey
    white: "#ffffff", // White
    black: "#000000", // Black
  },
};

export const ThemeContext = createContext(theme);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
