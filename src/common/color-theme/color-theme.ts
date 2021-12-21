import {
  faMoon,
  faSun,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface ColorTheme {
  text: string;
  textSecondary: string;
  background: string;
  icon: IconDefinition;
  button: string;
}

export const darkColorTheme: ColorTheme = {
  text: "text-light",
  textSecondary: "text-white-50",
  background: "bg-dark",
  icon: faMoon,
  button: "light",
};

export const brightColorTheme: ColorTheme = {
  text: "text-dark",
  textSecondary: "text-black-50",
  background: "bg-light",
  icon: faSun,
  button: "primary",
};

export const defaultColorTheme = brightColorTheme;

export const ColorThemeContext =
  React.createContext<ColorTheme>(defaultColorTheme);
