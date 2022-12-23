import { Box, useTheme } from '@mui/material'
import { Header, Choropleth } from '../components'
import { GeographyData } from '../data'
import { ThemeTokens } from '../Theme'

const Geography = () => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
      <>
        <Box m="20px">
          <Header title="GEOGRAPHY" subtitle="Data represented on a world map"  />
          <Box height="75vh" border={`1px solid ${colors.gray[100]}`} borderRadius="4px" >
            <Choropleth data={GeographyData} />
          </Box>
        </Box>
      </>
    )
}

export default Geography
