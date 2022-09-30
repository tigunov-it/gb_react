import { createContext } from "react";

export const themes = {
    light: {
        background: '#eee',
        text: '#000'
    },
    dark: {
        background: '#000',
        text: '#eee'
    }
}

export const ThemeContext = createContext(themes.light);