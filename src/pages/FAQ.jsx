import React from 'react'
import { Header } from '../components'
import { Box, useTheme, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ThemeTokens } from '../Theme'
import { ExpandMore } from '@mui/icons-material'


const FAQ = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)


  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Box className='flex flex-col gap-2 justify-between'>
        {/* Question 1 */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Accusamus qui error, pariatur, explicabo eaque perspiciatis voluptates tempora veritatis cum ut, 
              enim magni eligendi aliquam voluptas. Consectetur illum placeat eos nostrum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Accusamus qui error, pariatur, explicabo eaque perspiciatis voluptates tempora veritatis cum ut, 
              enim magni eligendi aliquam voluptas. Consectetur illum placeat eos nostrum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Accusamus qui error, pariatur, explicabo eaque perspiciatis voluptates tempora veritatis cum ut, 
              enim magni eligendi aliquam voluptas. Consectetur illum placeat eos nostrum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 4 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Accusamus qui error, pariatur, explicabo eaque perspiciatis voluptates tempora veritatis cum ut, 
              enim magni eligendi aliquam voluptas. Consectetur illum placeat eos nostrum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 5 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Accusamus qui error, pariatur, explicabo eaque perspiciatis voluptates tempora veritatis cum ut, 
              enim magni eligendi aliquam voluptas. Consectetur illum placeat eos nostrum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 6 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Accusamus qui error, pariatur, explicabo eaque perspiciatis voluptates tempora veritatis cum ut, 
              enim magni eligendi aliquam voluptas. Consectetur illum placeat eos nostrum!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default FAQ