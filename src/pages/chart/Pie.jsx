import { Box } from '@mui/material' 
import { PieChartData } from '../../data'
import { Header, PieChart } from '../../components'

const PieChartPage = () => {
  return (
    <>
      <Box m="20px">
        <Header title="PIE CHART" subtitle="Data represented on a pie chart"  />
        <Box height="75vh">
          <PieChart data={PieChartData} />
        </Box>
      </Box>
    </>
  )
}

export default PieChartPage
