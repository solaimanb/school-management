"use client";
import React, { createContext, useContext, ReactNode } from "react";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#ffffff",
    black: "#000000",
  },
};

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
