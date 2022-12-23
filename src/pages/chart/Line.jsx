import { Box } from '@mui/material' 
import { LineChartData } from '../../data'
import { Header, LineChart } from '../../components'

const LineChartPage = () => {
  return (
    <>
      <Box m="20px">
        <Header title="LINE CHART" subtitle="Data represented on a line chart"  />
        <Box height="75vh">
          <LineChart data={LineChartData} />
        </Box>
      </Box>
    </>
  )
}

export default LineChartPage