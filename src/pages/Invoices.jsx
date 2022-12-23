import React from 'react'
import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { ThemeTokens } from '../Theme'
import { InvoicesData } from '../data'
import { Header } from '../components'

const Invoices = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)
  
  const columns = [
    { field: "id", headerName: "ID", flex: 1,},
    { field: "name", headerName: "Name", flex:2, cellClassName: "name-column--cell" },
    { field: "email", headerName: "Email", flex:2 },
    { field: "phone", headerName: "Phone Number", flex:2 },
    { field: "cost", headerName: "Cost Price", flex: 1, type: "number", headerAlign: "left", align: "left",
    renderCell: (params) => {
      <Typography color={colors.greenAccent[500]}>
        ${params.row.cost}
      </Typography>
    }
    },
    { field: "date", headerName: "Date", type: "date" },
  ]

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
          }, 
          "& .MuiCheckbox-root" : {
            color: `${colors.greenAccent[200]} !important`
          }
        }}
      >
        <DataGrid 
          checkboxSelection
          rows={InvoicesData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Invoices
