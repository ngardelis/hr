import React from 'react'
import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles

const Events = () => {

  const events = [
    {
        id: 1,
        startAt: '2022-12-25T18:00:00.000Z',
        endAt: '2022-12-25T19:00:00.000Z',
        summary: 'Christmas',
        color: 'blue',
        calendarID: 'work'
    },
    {
        id: 2,
        startAt: '2022-11-29T18:00:00.000Z',
        endAt: '2022-11-29T19:00:00.000Z',
        summary: 'testing',
        color: 'blue'
    }
    ,
    {
        id: 3,
        startAt: '2022-09-25T18:00:00.000Z',
        endAt: '2022-09-25T19:00:00.000Z',
        summary: 'Industrial Iter2 Deadline',
        color: 'red'
    }
]

  return (
    <div className='e-container'>
      <div className="e-row">
        <h3 className="e-title">Events</h3>        
      </div>
      <div className="e-row">
      <Kalend
        //onEventClick={onEventClick}
        //onNewEventClick={onNewEventClick}
        events={events}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        disabledViews={[CalendarView.DAY]}
        //onSelectView={onSelectView}
        //selectedView={selectedView}
        //onPageChange={onPageChange}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'en'}
      />
      </div>
    </div>
  )
}

export default Events