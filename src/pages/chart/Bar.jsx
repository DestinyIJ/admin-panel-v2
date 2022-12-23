import { BarChartData } from "../../data"
import { Box } from '@mui/material'
import { Header, BarChart } from '../../components'


const BarChartPage = () => {

  return (
    <>
      <Box m="20px">
        <Header title="BAR CHART" subtitle="Data represented on a bar chart"  />
        <Box height="75vh">
          <BarChart data={BarChartData} />
        </Box>
      </Box>
    </>
  )
}

export default BarChartPage
