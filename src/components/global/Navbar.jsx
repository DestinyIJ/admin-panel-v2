import React from 'react'
import { useColorModeContext } from '../../ContextProviders/ColorModeProvider'
import { ThemeTokens } from "../../Theme"
import { Box, IconButton, useTheme, InputBase } from "@mui/material"
import { LightModeOutlined,  DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, Search } from '@mui/icons-material'


const Navbar = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)
  const { colorMode } = useColorModeContext()
  
  return (
    <Box className='flex justify-between p-2' >
      {/* Search bar */}
      <Box className={`flex rounded `} backgroundColor={colors.primary[400]}  >
        <InputBase sx={{ ml:2, flex:1 }} placeholder="Search" />
        <IconButton type='button' sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* Icons bar */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode === 'light' ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )
          }
        </IconButton>
        {/* notifications button */}
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        {/* settings button */}
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        {/* profile button */}
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Navbar
