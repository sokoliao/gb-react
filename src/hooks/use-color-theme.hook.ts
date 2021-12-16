import { useState } from "react";
import {
  brightColorTheme,
  ColorTheme,
  darkColorTheme,
  defaultColorTheme,
} from "../common/color-theme/color-theme";

export const useColorTheme = (): [ColorTheme, () => void] => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultColorTheme);
  const switchColorTheme = () => {
    setColorTheme((current) => {
      if (current === brightColorTheme) {
        return darkColorTheme;
      } else {
        return brightColorTheme;
      }
    });
  };
  return [colorTheme, switchColorTheme];
};
