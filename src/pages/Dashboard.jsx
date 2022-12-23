import React from 'react'
import { Header } from '../components'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { ThemeTokens } from '../Theme'
import { TransactionsData, LineChartData, BarChartData, PieChartData, GeographyData } from '../data'
import { DownloadOutlined, Email, PointOfSale, Traffic, PersonAdd } from '@mui/icons-material'
import { LineChart, BarChart, Choropleth, PieChart, ProgressCircle, StatBox }from '../components'


const Dashboard = () => {
    const theme = useTheme()
    const colors = ThemeTokens(theme.palette.mode)

    return (
      <Box m="20px">
        <Box className='flex flex-col md:flex-row justify-between items-center mb-5'>
          <Header title="DASHBOARD" subtitle="Welcome to admin dashboard!" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.gray[100],
                fontSize: "14px", fontWeight: "bold",
                padding: "10px 20px"
              }}
            >
              <DownloadOutlined sx={{ mr: "10px"}} />
              Download Reports
            </Button>
          </Box>
        </Box>

        {/* GRID AND CHARTS */}
        <Box className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 auto-rows-[140px] gap-5">
            {/* Row 1 */}
            <Box 
              backgroundColor={colors.primary[400]}
              className="flex items-center justify-center col-span-8 md:col-span-4  lg:col-span-3" 
            >
              <StatBox 
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={<Email sx={{ color: colors.greenAccent[600]}} fontSize="26px" />}
              />
            </Box>

            <Box 
              backgroundColor={colors.primary[400]}
              className="flex items-center justify-center col-span-8 md:col-span-4 lg:col-span-3" 
            >
              <StatBox 
                title="456,361"
                subtitle="Sales"
                progress="0.56"
                increase="+22%"
                icon={<PointOfSale sx={{ color: colors.greenAccent[600]}} fontSize="26px" />}
              />
            </Box>

            <Box 
              backgroundColor={colors.primary[400]}
              className="flex items-center justify-center col-span-8 md:col-span-4 lg:col-span-3" 
            >
              <StatBox 
                title="56,272"
                subtitle="Clients"
                progress="0.34"
                increase="+11.5%"
                icon={<PersonAdd sx={{ color: colors.greenAccent[600]}} fontSize="26px" />}
              />
            </Box>

            <Box 
              backgroundColor={colors.primary[400]}
              className="flex items-center justify-center col-span-8 md:col-span-4 lg:col-span-3" 
            >
              <StatBox 
                title="2,456,361"
                subtitle="Traffic Inbound"
                progress="0.26"
                increase="+29%"
                icon={<Traffic sx={{ color: colors.greenAccent[600]}} fontSize="26px" />}
              />
            </Box>

            {/* Row 2 */}
            <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Box p="0 30px" className='flex items-center justify-between mt-6'>
                <Box>
                  <Typography variant="h5" fontWeight="600" color={colors.gray[100]} >
                      Revenue Generated
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]} >
                      $59,342.32
                  </Typography>
                </Box>

                <Box>
                  <IconButton>
                    <DownloadOutlined sx={{ fontSize:"26px", color:colors.greenAccent[500] }} />
                  </IconButton>
                </Box>
              </Box>

              <Box height="250px" mt="-20px">
                <LineChart data={LineChartData} isDashboard={true} />
              </Box>
            </Box>

            <Box gridRow="span 2"
              overflow="auto" backgroundColor={colors.primary[400]}
              className=" col-span-8 lg:col-span-4"
            >
              <Box 
                className='flex justify-between items-center p-4' 
                borderBottom={`4px solid ${colors.primary[500]}`}
                color={colors.gray[100]}
              >
                <Typography
                  color={colors.gray[100]} variant="h5" fontWeight="600"
                >
                  Recent Transactions
                </Typography>
              </Box>

              {
                TransactionsData.map((transaction, index) => (
                  <Box
                    key={`${transaction.txId}-${index}`}
                    className="flex justify-between items-center p-4"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                  >
                    <Box>
                      <Typography
                        color={colors.greenAccent[500]} variant="h5" fontWeight="600"
                      >
                        {transaction.txId}
                      </Typography>
                      <Typography
                        color={colors.gray[100]}
                      >
                        {transaction.user}
                      </Typography>
                    </Box>

                    <Box color={colors.gray[100]}>
                      {transaction.date}
                    </Box>

                    <Box
                      backgroundColor={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                    >
                      ${transaction.cost}
                    </Box>
                  </Box>
                ))
              }
            </Box>

            {/* Row 3 */}
            <Box
              className="col-span-8 lg:col-span-6"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography variant='h5' fontWeight="600">
                Campaign
              </Typography>
              <Box className='flex flex-col items-center mt-6'>
                <ProgressCircle size="125" />
                <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: "15px"}}>
                  Revenue Generated: $46,654.43
                </Typography>
                <Typography>
                  Includes miscellaneous expenditures and costs
                </Typography>
              </Box>
            </Box>

            

            <Box
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              className="col-span-8 lg:col-span-6"
            >
              <Typography variant='h5' fontWeight="600"
                sx={{ p: "30px 30px 0 30px"}}
              >
                Usage
              </Typography>
              <Box className='h-[250px] mt-[-20px]'>
                <PieChart data={PieChartData} />
              </Box>
            </Box>

            {/* Row 4 */}
            <Box
              className="col-span-8 lg:col-span-6"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Typography variant='h5' fontWeight="600"
                sx={{ p: "30px 30px 0 30px"}}
              >
                Sales
              </Typography>
              <Box className='h-[250px] mt-[-20px]'>
                <BarChart data={BarChartData} isDashboard={true} />
              </Box>
            </Box>

            <Box
              className="col-span-8 lg:col-span-6"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography variant='h5' fontWeight="600"
                sx={{ mb:"15px"}}
              >
                Traffic
              </Typography>
              <Box className='h-[220px] mt-[-20px]'>
                <Choropleth data={GeographyData} isDashboard={true} />
              </Box>
            </Box>
        </Box>
      </Box>
    )
}

export default Dashboard
