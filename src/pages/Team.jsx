import React from 'react'
import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { ThemeTokens } from '../Theme'
import { TeamData } from '../data'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'
import { Header } from '../components'

const Team = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)

  const columns = [
    { field: "id", headerName: "ID"},
    { field: "name", headerName: "Name", flex:1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
    { field: "email", headerName: "Email", flex:1 },
    { field: "phone", headerName: "Phone Number", flex:1 },
    { field: "admin", headerName: "Access Level", flex:1, 
    renderCell: ({ row: { access } }) => {
      return (
        <Box className='flex justify-center mx-auto w-[60%] rounded p-1'
          backgroundColor={
            access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
          }
        >
          { access === "admin" && <AdminPanelSettingsOutlined />}
          { access === "manager" && <SecurityOutlined />}
          { access === "user" && <LockOpenOutlined />}
          <Typography color={colors.gray[100]} sx={{ ml:"5px"}} >
            {access}
          </Typography>
        </Box>
      )
    } }
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Manage Team Members" />
      <Box m="40px 0 0 0" height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} important!`
          }
        }}
      >
        <DataGrid 
          rows={TeamData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Team