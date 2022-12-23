import { useState, useMemo, useContext, createContext } from "react";
import { createTheme } from "@mui/material/styles"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeSettings } from "../Theme";

const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const [mode, setMode] = useState("dark")

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"))
            console.log(mode)
        }
    }), [mode])

    const theme = useMemo(() => createTheme(ThemeSettings(mode)), [mode])

    return [theme, colorMode]
}

export const ColorModeProvider = ({children}) => {
    const [theme, colorMode ] = useMode()

    return (
        <ColorModeContext.Provider value={{colorMode}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export const useColorModeContext = () => useContext(ColorModeContext)