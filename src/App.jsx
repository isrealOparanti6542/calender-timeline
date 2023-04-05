import { useState } from 'react'
import './App.css'
import TimelineApp from './components/timeline.jsx';
import moment from 'moment'
function App() {
//   const [state, setState] = useState();
//   const today = new Date();
//   const numberOfDaysToAdd = 3;
//   const date = new Date(today.getFullYear(), today.getMonth(), 1); 
//   const defaultValue = date.toISOString() // yyyy-mm-d
//   console.log(defaultValue)
  const [value, setValue] = useState(moment().format('YYYY-MM-DD'));
  const onChangeDate = e => {
   const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
   setValue(newDate);
   console.log(newDate); //value picked from date picker
 };
  return (
    <div className="App">
    <div class="Flist">
       <div class="Fitem"><i class="fas fa-refresh" id="refresh"></i></div>
       <div class="Fitem"><span id='indicate'>From</span></div>
       <div class="Fitem"><input type="date" value={value} onChange={onChangeDate}/></div>
       <div class="Fitem"><span id="indicate">To</span></div>
       <div class="Fitem"><input type="date"/></div>
       <div class="Fitem"><span><i class="fas fa-arrow-left arrow"></i><span id="indicate">NOW</span><span><i class="fas fa-arrow-right arrow"></i></span></span></div>
       <div class="Fitem"><button id='publish'>PUBLISH</button></div>
       <div class="Fitem"><input type="text" placeholder="time-zone"/></div>
    </div>
       <TimelineApp/>
       <div id="foot">
          <div><button id="footB">new schedule</button></div>
          <div><button id="footB">select flight</button></div>
          <div><button id="footB">modify flight</button></div>
          <div><button id="delete">delete</button></div>
       </div>
    </div>
  )
}

export default App
