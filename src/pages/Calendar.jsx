import React, { useState } from 'react'
import { formatDate } from "@fullcalendar/core"
import FullCalendar from '@fullcalendar/react'
import daygrid from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
import list from '@fullcalendar/list'
import interaction from '@fullcalendar/interaction'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import { Header } from '../components'
import { ThemeTokens } from '../Theme'


const CalendarPage = () => {
  const theme = useTheme()
  const colors = ThemeTokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected) => {
    const title = prompt("Enter Title for new Event")
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if(title){
      calendarApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected) => {
    if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}?`)) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Organize your events" />
      <Box className='flex justify-between flex-wrap lg:flex-nowrap'>
        {/* Calendar Sidebar */}
        <Box className=' w-full lg:w-1/5 flex-shrink'  backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
          <Typography variant='h5' >Events</Typography>
          <List>
            {
              currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius:"2px" }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        { formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))
            }
          </List>
        </Box>

        {/* Calendar */}
        <Box  ml="15px" className=' w-full lg:w-4/5 flex-grow'>
            <FullCalendar  
              height="75vh"
              plugins={[
                daygrid,
                timegrid,
                interaction,
                list
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
              }}
              initialView="dayGridMonth"
              editable
              selectable
              selectMirror
              dayMaxEvents
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {id: "1234", title: "Push to Net", date: "2022-12-30"}
              ]}
            />
            {/* <Calendar /> */}
        </Box>
      </Box>
    </Box>
  )
}

export default CalendarPage