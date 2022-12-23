import { Typography, Box, useTheme } from "@mui/material"
import { ThemeTokens } from "../../Theme"

const Header = ({ title, subtitle }) => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
        <Box mb="30px">
            <Typography className="font-bold mb-1" variant="h2" color={colors.gray[100]}>{title}</Typography>
            <Typography variant="h5" color={colors.greenAccent[400]} >{subtitle}</Typography>
        </Box>
    )
}

export default Header
