import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { ThemeTokens } from '../Theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
        <Box width="100%" m="0 30px">
            <Box className='flex justify-between'>
                <Box>
                    {icon}
                    <Typography 
                        variant='h4' 
                        fontWeight='bold'
                        sx={{ color: colors.gray[100]}}
                     >
                        {title}
                     </Typography>
                     <Typography 
                        variant='h5' 
                        sx={{ color: colors.greenAccent[500]}}
                     >
                        {subtitle}
                     </Typography>
                </Box>
                
                <Box className='flex flex-col justify-between'>
                    <Box>
                        <ProgressCircle progress={progress} />
                    </Box>
                     <Typography 
                        variant='h5' 
                        fontStyle="italic"
                        sx={{ color: colors.greenAccent[600]}}
                     >
                        {increase}
                     </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StatBox