import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import DriverNav from './DriverNav'
import { useAppContext } from '../../context/AppContext'

export default function Schedule() {
    const {trips,loggedInUser}= useAppContext();
    const eve= trips.filter(ele=> ele.driverEmail=== loggedInUser.email)
    const events = eve.map(trip => ({
        title: trip.destination || 'Trip',
        start: trip.startDate,
        end: trip.endDate,
        id: trip.id
    }))

    return (
        <div className='z-0 flex flex-row md:flex-col h-screen'>
            <DriverNav />
            <div className='flex-1 max-h-full md:mt-0 md:ml-[20%] flex flex-col p-3'>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek'
                    }}
                    events={events}
                    height="100%"
                    contentHeight="auto"
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    )
}
