import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses, menuClasses } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { ThemeTokens } from '../../Theme'
import { HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined,
         PersonOutlined, CalendarTodayOutlined, HelpOutlined,
          BarChartOutlined, PieChartOutlineOutlined, TimelineOutlined,
          MenuOutlined, MapOutlined, ArrowBack,  ShowChartOutlined } from '@mui/icons-material'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)

  return (
    <MenuItem 
      active={selected === title} 
      routerLink={<Link to={to} />}
      style={{ color: colors.gray[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    > 
    <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SidebarComponent = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)

  const { collapseSidebar } = useProSidebar();
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")

  const toggleSideBar = () => {
    collapseSidebar()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <Box>
        <Sidebar className='h-screen overflow-hidden' 
        rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: `${colors.primary[400]}`,
            },
            [`.${menuClasses.button}`]: {
              padding: `5px 35px 5 20px !important`,
              backgroundColor: `transparent !important`
            },
            [`.${menuClasses.button}:hover`]: {
              color: "#868dfb !important"
            },
            [`.${menuClasses.root}:active`] : {
              color: "#6870fa !important"
            },
            [`.${menuClasses.subMenuContent}`] : {
              padding: `5px 35px 5 20px !important`,
              backgroundColor: `transparent !important`
            },
            [`.${menuClasses.icon}`] : {
              backgroundColor: `transparent !important`
            }
          }}
        >
          <Menu iconShape="square">
            {/* Logo and Menu Icon */}
            <MenuItem 
                onClick={toggleSideBar} 
                icon={isCollapsed ? <MenuOutlined /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.gray[100]
                }}
              >
              {!isCollapsed && (
                <Box className='flex justify-between items-center ml-4'>
                  <Typography variant='h3' colors={colors.gray[100]}>ADMIN</Typography>
                  <IconButton>
                    {isCollapsed ? <MenuOutlined /> : <ArrowBack />}
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {/* User */}
            {
              !isCollapsed && (
                <Box className=' mb-6 flex flex-col justify-center items-center'>
                  <Box>
                    <img src="/assets/user.png" className=' cursor-pointer rounded-[50%]' alt='Profile User' width="100px" height= "100px"  />
                  </Box>
                  <Box textAlign='center'>
                    <Typography variant='h2' color={colors.gray[100]} fontWeight='bold' className=' mt-3'>Jon Doe</Typography>
                    <Typography variant='h5' color={colors.greenAccent[500]}>Admin</Typography>
                  </Box>
                </Box>
              )
            }
            {/* Menu items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item title="Dashboard" to="/" icon={<HomeOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Profile Form" to="/form" icon={<PersonOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Contact Information" to="/contacts" icon={<ContactsOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Invoices Balance" to="/invoices" icon={<ReceiptOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Manage Team" to="/team" icon={<PeopleOutlined />} selected={selected} setSelected={setSelected} />      
              <SubMenu label="Charts" icon={<ShowChartOutlined/>}>
                <Item title="Bar" to="/chart/bar" icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
                <Item title="Pie" to="/chart/pie" icon={<PieChartOutlineOutlined />} selected={selected} setSelected={setSelected} />
                <Item title="Line" to="/chart/line" icon={<TimelineOutlined />} selected={selected} setSelected={setSelected} />
              </SubMenu>
              <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="Geography" to="/geography" icon={<MapOutlined />} selected={selected} setSelected={setSelected} />
              <Item title="FAQ" to="/faq" icon={<HelpOutlined />} selected={selected} setSelected={setSelected} />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </>
  )
}

export default SidebarComponent