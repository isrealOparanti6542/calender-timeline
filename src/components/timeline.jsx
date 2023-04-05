import React from 'react'
import "./timeline.css"
import Timeline from 'react-calendar-timeline'
 import moment from 'moment'

const groups = [
    { id: 1, title: <div id="groups">ABCDE</div> }, 
    { id: 2, title: <div id="groups">B-ARTI</div> },
    { id: 3, title: <div id="groups">G-OVMT</div> },
    { id: 4, title: <div id="groups">v-ADER</div> },
    { id: 5, title: '' },
    { id: 6, title: '' },
    { id: 7, title: '' },
    { id: 8, title: '' },
    { id: 9, title: '' },
    { id: 10, title: '' },
    { id: 11, title: '' },
    { id: 12, title: '' },
    { id: 13, title: '' },
    { id: 14, title: '' },
    { id: 15, title: '' }
]
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 3,
    title: 'item 3',
    start_time: moment().add(3, 'hour'),
    end_time: moment().add(6, 'hour')
  },
  {
    id: 4,
    group: 4,
    title: 'item 4',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 5,
    group: 5,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(4, 'hour')
  },
  {
    id: 6,
    group: 6,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(4, 'hour')
  },
  {
    id: 7,
    group: 7,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(4, 'hour')
  },
  {
    id: 8,
    group: 8,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(4, 'hour')
  },
  {
    id: 5,
    group: 5,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(4, 'hour')
  }

]
const timeSteps = {
  hour: 6,
  day: 1,
  month: 1,
  year: 1
}
var date = new Date();
function TimelineApp() {
  
  return (
    <div>
        
    <Timeline
        // minZoom={(60 * 60 * 1000) *24}
        groups={groups} //the above groups
        items={items} //same the above defined items
        defaultTimeStart={new Date(date.getFullYear(), date.getMonth(), 1)}
        defaultTimeEnd={moment().add(12, 'hour')}
        timeSteps={timeSteps}
    />
    
    </div>
  )
}
export default TimelineApp