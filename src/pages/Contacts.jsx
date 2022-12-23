import React from 'react'
import { Box, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { ContactsData } from '../data'
import { Header } from '../components'
import { ThemeTokens } from '../Theme'

const Contacts = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)


  const columns = [
    { field: "id", headerName: "ID", flex: 1,},
    { field: "registerId", headerName: "Register ID", type: "number", headerAlign: "left", align: "left" },
    { field: "name", headerName: "Name", flex:2, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", flex: 1, type: "number", headerAlign: "left", align: "left"},
    { field: "email", headerName: "Email", flex:2 },
    { field: "phone", headerName: "Phone Number", flex:2 },
    { field: "address", headerName: "Address", flex:3 },
    { field: "city", headerName: "City", flex:1 },
    { field: "zipCode", headerName: "Zip/Postal Code", type: "number", headerAlign: "left", align: "left" },
  ]


  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts" />
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
          rows={ContactsData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts